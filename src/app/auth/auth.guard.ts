import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {TokenService} from './token.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
 constructor(private tokenService: TokenService, private router: Router) {}

 async canActivate(): Promise<boolean> {
  if (!await this.tokenService.isLogged()) {
   this.router.navigate(['/auth']);
   return false;
  }
  return true;
 }
}
