import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfPasswordValidationComponent } from './tdf-password-validation.component';

describe('TdfPasswordValidationComponent', () => {
  let component: TdfPasswordValidationComponent;
  let fixture: ComponentFixture<TdfPasswordValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfPasswordValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfPasswordValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
