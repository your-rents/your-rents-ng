import { Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './shared/security';
import { Page403Component } from './page403/page403.component';

export const routes: Routes = [
  { path: 'home', title: 'YourRents - Home', component: HomeComponent },
  { path: 'about', title: 'YourRents - About', component: AboutComponent },
  {
    path: 'profile',
    title: 'YourRents - User Profile',
    loadComponent: () => import('./profile/profile.component'),
    canActivate: [AuthGuard],
    data: { roles: ['USER'] },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '403', title: 'YourRents - Access Denied', component: Page403Component},
  {
    path: '**',
    title: 'YourRents - Page Not Found',
    component: Page404Component,
  },
];
