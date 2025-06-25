import { AsyncPipe } from '@angular/common';
import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
    selector: 'app-authentication',
    imports: [RouterModule, MatButtonModule, TranslocoDirective],
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit {
  isLoggedIn = false;
  user: KeycloakProfile | null = null;

  constructor(
    private readonly keycloakService: KeycloakService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      this.user = await this.keycloakService.loadUserProfile();
    }
  }

  public login() {
    this.keycloakService.login();
  }

  public logout() {
    this.router.navigate(['/']).then(() => this.keycloakService.logout());
  }
}
