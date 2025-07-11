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
import Keycloak from 'keycloak-js';
import { TranslocoDirective, TranslocoModule } from '@jsverse/transloco';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css',
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
    ]
})
export class NavigationComponent {
  title = 'YourRents';
  isLoggedIn? = false;
  isAdmin = false;
  isUser = false;

  private readonly keycloak: Keycloak = inject(Keycloak);

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  async ngOnInit() {
    this.isLoggedIn = this.keycloak.authenticated;

    if (this.isLoggedIn) {
      this.isAdmin = this.keycloak.hasResourceRole('ADMIN');
      this.isUser  = this.keycloak.hasResourceRole('USER');
    }

  }
}
