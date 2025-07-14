import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDashboardComponent } from './property-dashboard.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppTestingModule } from '../../shared/testing/app-testing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PropertyDashboardComponent', () => {
  let component: PropertyDashboardComponent;
  let fixture: ComponentFixture<PropertyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDashboardComponent, AppTestingModule],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
