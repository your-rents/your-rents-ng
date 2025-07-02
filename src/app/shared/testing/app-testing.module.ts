import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import Keycloak from 'keycloak-js';
import { TranslocoTestingModule } from '@jsverse/transloco';
import en from '../../../assets/i18n/en.json';
import it from '../../../assets/i18n/it.json';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ imports: [NoopAnimationsModule,
        TranslocoTestingModule.forRoot({
            langs: { en, it },
            translocoConfig: {
                availableLangs: [{id: 'en', label: 'English'}, {id: 'it', label: 'Italiano'}],
                defaultLang: 'en',
            },
            preloadLangs: true,
        })], providers: [
        provideRouter([]),
        { provide: Keycloak, useValue: jasmine.createSpyObj('Keycloak', ['init', 'login', 'logout', 'loadUserProfile', 'resourceAccess']) },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ] })
export class AppTestingModule {}
