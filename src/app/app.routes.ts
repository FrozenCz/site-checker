import {Routes} from '@angular/router';
import {HomePageComponent} from './public/home-page/home-page.component';
import {RealityComponent} from './public/reality/reality.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RealitiesEditationComponent} from "./admin/realities-editation/realities-editation.component";
import {DetailComponent} from "./admin/realities-editation/detail/detail.component";
import {loginGuard} from './auth/login.guard';
import {PublicComponent} from "./public/public.component";

export const routes: Routes = [
 {path: 'administrace', component: LoginFormComponent},
 {
  path: 'admin',
  canActivate: [loginGuard],
  loadComponent: () =>
   import('./admin/admin.component')
    .then(m => m.AdminComponent),
  children: [
   {path: '', pathMatch: 'full', redirectTo: 'realities'},
   {path: 'realities', component: RealitiesEditationComponent},
   {path: 'realities-sold', component: RealitiesEditationComponent, data: {sold: true}},
   {path: 'realities/:uuid', component: DetailComponent}
  ],
 },
 {path: '', component: PublicComponent, children: [
   {path: '', pathMatch: 'full', component: HomePageComponent},
   {path: 'reality/:id/:name', component: RealityComponent},
   {
    path: 'nemovitost',
    loadComponent: () =>
     import('./public/advertisements/advertisements.component')
      .then(m => m.AdvertisementsComponent),
   },
   {
    path: 'nemovitost/:uuid',
    loadComponent: () =>
     import('./public/advertisement-detail/advertisement-detail.component')
      .then(m => m.AdvertisementDetailComponent),
   }
  ]}
];
