import {Routes} from '@angular/router';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {loginGuard} from './auth/login.guard';
import {PublicComponent} from "./public/public.component";
import {adminRoutes} from './admin/admin.routes';

export const routes: Routes = [
 {path: 'auth', component: LoginFormComponent},
 {
  path: 'admin',
  // canActivate: [loginGuard],
  loadComponent: () =>
   import('./admin/admin.component')
    .then(m => m.AdminComponent),
  children: adminRoutes,
 },
 {
  path: '', component: PublicComponent, children: []
 }
];
