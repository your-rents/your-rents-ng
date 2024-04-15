import { ComponentFixture, TestBed } from '@angular/core/testing';

import CityListComponent from './city-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppTestingModule } from '../../../../shared/testing/app-testing.module';

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityListComponent, AppTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
