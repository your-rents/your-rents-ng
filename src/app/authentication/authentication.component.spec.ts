import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { AppTestingModule } from '../shared/testing/app-testing.module';
import { AuthenticationComponent } from './authentication.component';

export const passThroughInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticationComponent, AppTestingModule],
      providers: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponent);
      component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

});
