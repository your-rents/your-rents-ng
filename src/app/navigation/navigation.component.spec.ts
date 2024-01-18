import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavigationComponent, RouterTestingModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
