import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { TranslocoTestingModule } from '@jsverse/transloco';
import en from '../../../assets/i18n/en.json';
import it from '../../../assets/i18n/it.json';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ imports: [NoopAnimationsModule,
        TranslocoTestingModule.forRoot({
            langs: { en, it },
            translocoConfig: {
                availableLangs: ['en', 'it'],
                defaultLang: 'en',
            },
            preloadLangs: true,
        })], providers: [
        provideRouter([]),
        { provide: KeycloakService, useValue: jasmine.createSpyObj('KeycloakService', ['init', 'login', 'logout', 'isLoggedIn', 'loadUserProfile']) },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ] })
export class AppTestingModule {}
