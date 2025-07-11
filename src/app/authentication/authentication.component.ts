import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { KeycloakProfile } from 'keycloak-js';
import Keycloak from 'keycloak-js';

@Component({
    selector: 'app-authentication',
    imports: [RouterModule, MatButtonModule, TranslocoDirective],
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit {
  isLoggedIn?:boolean = false;
  user: KeycloakProfile | null = null;

  constructor(
    private readonly keycloak: Keycloak,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.isLoggedIn = this.keycloak.authenticated;

    if (this.isLoggedIn) {
      this.user = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.router.navigate(['/']).then(() => this.keycloak.logout());
  }
}
