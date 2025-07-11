import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { PropertyService } from '../../shared/service/properties/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, tap } from 'rxjs';
import { Property } from '../../shared/model/properties/property';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-property-detail',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {

  uuid: string = '0001'
  name: string = "abitazione 1"
  description: string = "casetta interessante singola";

  property = this.fb.group({
    uuid: '',
    name: '',
    description: ''
  });

  myProperty$;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService) {

    this.myProperty$ = route.params.pipe(
      switchMap((params) => (params['uuid'] !== undefined) ? this.propertyService.getProperty(params['uuid']) : of(<Property>{})),
      tap((dbProperty) => {
        console.log(dbProperty);
        this.property.patchValue({
          uuid: dbProperty.uuid,
          name: dbProperty.name,
          description: dbProperty.description
        })
      }))
  }




}
