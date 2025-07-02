import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { PropertyListComponent } from "../property-list/property-list.component";

@Component({
  selector: 'app-property-dashboard',
  imports: [MatTabsModule, RouterModule, PropertyListComponent],
  templateUrl: './property-dashboard.component.html',
  styleUrl: './property-dashboard.component.css'
})
export class PropertyDashboardComponent {

}
