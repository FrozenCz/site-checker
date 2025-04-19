import {Routes} from '@angular/router';

export const adminRoutes: Routes = [
 {path: '', pathMatch: 'full', loadComponent: () => import('./landing-page/landing-page.component').then(m => m.LandingPageComponent)},
 {path: 'sites', loadComponent: () => import('./sites/sites.component').then(m => m.SitesComponent)}
];
