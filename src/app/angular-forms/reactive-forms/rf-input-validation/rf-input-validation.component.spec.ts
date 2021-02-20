import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfInputValidationComponent } from './rf-input-validation.component';

describe('RfInputValidationComponent', () => {
  let component: RfInputValidationComponent;
  let fixture: ComponentFixture<RfInputValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfInputValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfInputValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
