import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherComponent } from './language-switcher.component';
import { AppTestingModule } from '../shared/testing/app-testing.module';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent, AppTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
