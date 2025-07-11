import { Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Page403Component } from './page403/page403.component';
import { canActivateAuthRole } from './shared/security/auth.guard';

export const routes: Routes = [
  { path: 'home', title: 'YourRents - Home', component: HomeComponent },
  { path: 'about', title: 'YourRents - About', component: AboutComponent },
  {
    path: 'profile',
    title: 'YourRents - User Profile',
    loadComponent: () => import('./profile/profile.component'),
    canActivate: [canActivateAuthRole],
    data: { roles: ['USER'] },
  },
  {
    path: 'admin',
    title: 'YourRents - Admin',
    loadChildren: () => import('./admin/admin.routes').then((m) => m.routes),
    canActivate: [canActivateAuthRole],
    data: { roles: ['ADMIN'] },
  },

  {
    path:"properties",
    title: 'YourRents - Properties',
    loadChildren: () => import('./properties/properties.routes').then((m) => m.routes),
    canActivate: [canActivateAuthRole],
    data: { roles: ['USER'] },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '403',
    title: 'YourRents - Access Denied',
    component: Page403Component,
  },
  {
    path: '**',
    title: 'YourRents - Page Not Found',
    component: Page404Component,
  },
];
