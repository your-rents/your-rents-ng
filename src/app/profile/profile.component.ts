import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { KeycloakProfile } from 'keycloak-js';
import Keycloak from 'keycloak-js';
import { UserService } from '../shared/service/common/user.service';

@Component({
    selector: 'app-profile',
    imports: [MatCardModule, MatListModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export default class ProfileComponent implements OnInit {
  keycloak: Keycloak = inject(Keycloak);
  userService: UserService = inject(UserService);
  user: KeycloakProfile | null = null;
  roles: string[] = [];

  async ngOnInit() {
    this.user = await this.keycloak.loadUserProfile();
    this.roles = this.keycloak.resourceAccess![this.keycloak.clientId!]?.roles || [];
  }

}
