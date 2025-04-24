import {map, noop, Observable, of, switchMap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, signal, WritableSignal} from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import {Router} from '@angular/router';
import {LoginService} from "./login.model";
import {DOCUMENT} from "@angular/common";

@Injectable({
 providedIn: 'root'
})
export class TokenService implements LoginService {
 public static localStorage: Storage | undefined;

 private isLoggedSignal: WritableSignal<boolean> = signal<boolean>(false);

 constructor(private httpClient: HttpClient, private router: Router, @Inject(DOCUMENT) private document: Document) {
  if (document.defaultView) {
   TokenService.localStorage = document.defaultView.localStorage;
   const localStorageToken = TokenService.localStorage?.getItem('authJwtToken');
   if (localStorageToken && TokenService.isValid(localStorageToken)) {
    this.setToken(localStorageToken);
   }
  } else {
   throw new Error('No storage found');
  }
 }


 sendCredentials(params: { login: string, pass: string }): Observable<void> {
  return this.httpClient.post<{ access_token: string, refresh_token: string }>('/api/auth/login', {
   name: params.login,
   pass: params.pass
  }).pipe(map(response => {
   if (response?.access_token) {
    this.setToken(response?.access_token)
    this.setRefreshToken(response?.refresh_token)
   }
   return;
  }));
 }

 setToken(token: string): void {
  TokenService.localStorage?.setItem('authJwtToken', token);
  this.isLoggedSignal.set(true);
 }

 setRefreshToken(token: string): void {
  TokenService.localStorage?.setItem('authJwtTokenRefresh', token);
 }


 isLogged(): Observable<boolean> {
  return of(TokenService.isValid(TokenService.localStorage?.getItem('authJwtTokenRefresh') ?? ''));
 }


 public static isValid(access_token: string | undefined): boolean {
  if (!access_token) {
   return false;
  }
  const date = jwtDecode(access_token.toString()).exp;
  return !!date && (new Date(date * 1000) > new Date());
 }

 public static hasValidToken(localStorageToken: string): boolean {

  if (!localStorageToken) {
   return false;
  }

  const date = jwtDecode(localStorageToken.toString()).exp;
  return !!date && (new Date(date * 1000) > new Date());
 }

 logout() {
  localStorage.removeItem('authJwtToken');
  localStorage.removeItem('authJwtTokenRefresh');
  this.isLoggedSignal.set(false);
  this.router.navigate(['/']).then(noop)
 }

 refreshToken() {
  const localStorageTokenRefresh = TokenService.localStorage?.getItem('authJwtTokenRefresh');

  return this.httpClient.post<{ access_token: string, refresh_token: string }>('/api/auth/login-refresh', {
   refresh_token: localStorageTokenRefresh
  }).pipe(map(response => {
   if (response?.access_token) {
    this.setToken(response?.access_token)
    this.setRefreshToken(response?.refresh_token)
   }
   return response.access_token
  }))
 }
}
