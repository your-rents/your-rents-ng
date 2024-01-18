import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
