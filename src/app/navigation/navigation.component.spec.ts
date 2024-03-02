import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { NavigationComponent } from './navigation.component';
import { AppTestingModule } from '../shared/testing/app-testing.module';

export const passThroughInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavigationComponent, AppTestingModule],
      providers: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
      component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'YourRents' title`, () => {
    expect(component.title).toEqual('YourRents');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('mat-sidenav-content mat-toolbar span#app-title')
        ?.textContent
    ).toContain('YourRents');
  });
});
