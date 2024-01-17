import { Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [{ path: '**', title: 'YourRents - Page Not Found', component: Page404Component }];
