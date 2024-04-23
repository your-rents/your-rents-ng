import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from './transloco-loader';
import { getBrowserLang, provideTransloco } from '@jsverse/transloco';
import { UserService } from './shared/service/common/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true,
    },
    provideAnimations(), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: [{id: 'en', label: 'English'}, {id: 'it', label: 'Italiano'}],
          defaultLang: JSON.parse(localStorage.getItem(UserService.USER_PREFS_KEY) || JSON.stringify({ lastLanguage: getBrowserLang() || 'en'})).lastLanguage,
          fallbackLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
  ],
};

function initKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init({
    config: {
      url: environment.authenticationUrl,
      realm: 'your-rents',
      clientId: 'your-rents-ng'
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin +  '/assets/silent-check-sso.html',
      locale: getBrowserLang() || 'en',
    },
    enableBearerInterceptor: true,
    bearerPrefix: 'Bearer',
    bearerExcludedUrls: [],
  });
}
