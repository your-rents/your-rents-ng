import { Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

export const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'geodata/cities',
            },
            {
                path: 'geodata',
                pathMatch: 'full',
                redirectTo: 'geodata/cities',
            },
            {
                path: 'geodata/cities',
                title: 'YourRents - Admin - Cities',
                loadComponent: () => import('./geodata/city/city-list/city-list.component'),
            }
        ]
    }
]