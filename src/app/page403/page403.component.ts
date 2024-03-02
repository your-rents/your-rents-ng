import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page403',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  templateUrl: './page403.component.html',
  styleUrl: './page403.component.css',
})
export class Page403Component {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
