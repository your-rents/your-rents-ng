import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule} from './angular-material.module';

import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NavigationBarComponent, NavComponent, NotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    AngularMaterialModule,
    AppRoutingModule,
    NavComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
