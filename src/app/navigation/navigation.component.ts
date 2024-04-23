import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { KeycloakService } from 'keycloak-angular';
import { TranslocoDirective, TranslocoModule } from '@jsverse/transloco';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    AsyncPipe,
    LanguageSwitcherComponent,
    AuthenticationComponent,
    TranslocoDirective,
  ],
})
export class NavigationComponent {
  title = 'YourRents';
  isLoggedIn = false;
  isAdmin = false;

  private readonly keycloakService: KeycloakService = inject(KeycloakService);

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      this.isAdmin = this.keycloakService.isUserInRole('ADMIN');
    }

  }
}
