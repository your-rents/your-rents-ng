import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404Component } from './page404.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Page404Component', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page404Component, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
