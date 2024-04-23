import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public translocoService: TranslocoService) {
  }
}
