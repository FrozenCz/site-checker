import {Routes} from '@angular/router';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {PublicComponent} from "./public/public.component";
import {adminRoutes} from './admin/admin.routes';
import {AuthGuard} from './auth/auth.guard';

export const routes: Routes = [
 {path: 'auth', component: LoginFormComponent},
 {
  path: 'admin',
  canActivate: [AuthGuard],
  loadComponent: () =>
   import('./admin/admin.component')
    .then(m => m.AdminComponent),
  children: adminRoutes,
 },
 {
  path: '', component: PublicComponent, children: []
 }
];
