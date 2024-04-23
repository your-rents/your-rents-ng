import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(public translocoService: TranslocoService) {
  }
}
