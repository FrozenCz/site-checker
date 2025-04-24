import {Injectable} from '@angular/core';
import {
 HttpErrorResponse,
 HttpEvent,
 HttpHandler,
 HttpInterceptor,
 HttpRequest,
 HttpResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {TokenService} from './token.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 private isRefreshing = false;
 private isRefreshingTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

 constructor(private tokenService: TokenService) {
 }

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const authJwtToken = localStorage.getItem('authJwtToken');
  let authReq = req;

  if (authJwtToken) {
   authReq = this.addToken(req, authJwtToken);
  }

  if(!this.isLoginUrl(req)) {
   console.log('notLoginUrl');
   return next.handle(authReq).pipe(
    catchError(error => {
     if (this.is401(error)) {
      console.log('tryIng to get new token');
      return this.handle401Error(authReq, next);
     }
     return throwError(error);
    })
   )
  } else {
   return next.handle(req);
  }
 }

 private handle401Error(req: HttpRequest<any>, next: HttpHandler) {
  if (!this.isRefreshing) {
   this.isRefreshing = true;
   this.isRefreshingTokenSubject.next(null);
   return this.tokenService.refreshToken().pipe(
    switchMap((token: any) => {
     this.isRefreshing = false;
     this.isRefreshingTokenSubject.next(token);
     return next.handle(this.addToken(req, token));
    })
   );
  } else {
   return this.isRefreshingTokenSubject.pipe(
    filter(token => token != null),
    take(1),
    switchMap(token => {
     return next.handle(this.addToken(req, token));
    })
   );
  }
 }

 private addToken(req: HttpRequest<any>, token: string) {
  const headerWithoutAuthorization = req.headers.delete('Authorization');
  const headersUpdated = headerWithoutAuthorization.set('Authorization', `Bearer ${token}`);
  return req.clone({
   headers: headersUpdated
  });
 }

 private is401(error: HttpErrorResponse) {
  return error.status === 401;
 }

 private isLoginUrl(req: HttpRequest<any>) {
  return req.url.includes('/api/auth/login') || req.url.includes('/api/auth/login-refresh');
 }
}
