import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page403Component } from './page403.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Page403Component', () => {
  let component: Page403Component;
  let fixture: ComponentFixture<Page403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page403Component, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
