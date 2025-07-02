import { Routes } from "@angular/router";
import { PropertyDashboardComponent } from "./property-dashboard/property-dashboard.component";


export const routes: Routes = [
    {
        path: '',
        title: 'YourRents - Properties',
        component: PropertyDashboardComponent,
    }
]
