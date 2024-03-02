import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { AppTestingModule } from '../shared/testing/app-testing.module';
import { ProfileComponent } from './profile.component';

export const passThroughInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProfileComponent, AppTestingModule],
      providers: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
      component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

});
