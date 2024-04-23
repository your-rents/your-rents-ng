import { Location, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    TranslocoDirective,
    UpperCasePipe
  ],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css',
})
export class Page404Component {
  
  constructor(private location: Location, public translocoService: TranslocoService) {}

  goBack() {
    this.location.back();
  }
}
