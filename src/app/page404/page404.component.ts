import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css',
})
export class Page404Component {
  
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
