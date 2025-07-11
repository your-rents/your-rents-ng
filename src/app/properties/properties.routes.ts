import { Routes } from "@angular/router";
import { PropertyDashboardComponent } from "./property-dashboard/property-dashboard.component";
import { PropertyDetailComponent } from "./property-detail/property-detail.component";


export const routes: Routes = [
    {
        path: '',
        title: 'YourRents - Properties',
        component: PropertyDashboardComponent,
    },
    {
        path: ':uuid',
        title: 'YourRents - Properties',
        component: PropertyDetailComponent,
    }
]
