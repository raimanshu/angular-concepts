import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfInputValidationComponent } from './tdf-input-validation.component';

describe('TdfInputValidationComponent', () => {
  let component: TdfInputValidationComponent;
  let fixture: ComponentFixture<TdfInputValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfInputValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfInputValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
