import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404Component } from './page404.component';
import { AppTestingModule } from '../shared/testing/app-testing.module';

describe('Page404Component', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page404Component, AppTestingModule]
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
