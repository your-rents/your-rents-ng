import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  createInterceptorCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  IncludeBearerTokenCondition,
  includeBearerTokenInterceptor,
  provideKeycloak,
} from 'keycloak-angular';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from './transloco-loader';
import { getBrowserLang, provideTransloco } from '@jsverse/transloco';
import { UserService } from './shared/service/common/user.service';

const localhostCondition =
  createInterceptorCondition<IncludeBearerTokenCondition>({
    urlPattern: new RegExp(`^(${environment.apiUrl})(/.*)?$`, 'i'), // Match URLs starting with the API URL
  });

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideKeycloak({
      config: {
        url: environment.authenticationUrl,
        realm: 'your-rents',
        clientId: 'your-rents-ng',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}/assets/silent-check-sso.html`,
        locale: getBrowserLang() || 'en',
      },
      providers: [
        {
          provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
          useValue: [localhostCondition], // Specify conditions for adding the Bearer token
        },
      ],
    }),
    provideAnimations(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    provideTransloco({
      config: {
        availableLangs: [
          { id: 'en', label: 'English' },
          { id: 'it', label: 'Italiano' },
        ],
        defaultLang: JSON.parse(
          localStorage.getItem(UserService.USER_PREFS_KEY) ||
            JSON.stringify({ lastLanguage: getBrowserLang() || 'en' })
        ).lastLanguage,
        fallbackLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
