import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';

@NgModule({
  imports: [RouterTestingModule, NoopAnimationsModule],
  providers: [
    {provide: KeycloakService, useValue: jasmine.createSpyObj('KeycloakService', ['init', 'login', 'logout', 'isLoggedIn', 'loadUserProfile'])}
  ],
})
export class AppTestingModule {}
