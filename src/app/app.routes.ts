import { Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home', title: 'YourRents - Home', component: HomeComponent },
    { path: 'about', title: 'YourRents - About', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', title: 'YourRents - Page Not Found', component: Page404Component }];
