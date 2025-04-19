import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {ExtraOptions, provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import {graphqlProvider} from './graphql.provider';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AuthInterceptor} from "./auth/auth.interceptor";
import {TokenService} from './auth/token.service';

const routerOptions: ExtraOptions = {
 anchorScrolling: 'enabled',
 scrollPositionRestoration: 'enabled',
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(routerOptions)),
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    graphqlProvider,
    provideAnimationsAsync(),
    {
      provide: LOCALE_ID,
      useValue: 'cs'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
