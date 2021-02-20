import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfPasswordValidationComponent } from './rf-password-validation.component';

describe('RfPasswordValidationComponent', () => {
  let component: RfPasswordValidationComponent;
  let fixture: ComponentFixture<RfPasswordValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfPasswordValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfPasswordValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
