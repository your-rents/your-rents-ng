import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatListModule, AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  keycloakService: KeycloakService = inject(KeycloakService);
  user: KeycloakProfile | null = null;

  async ngOnInit() {
    this.user = await this.keycloakService.loadUserProfile();
  }

}
