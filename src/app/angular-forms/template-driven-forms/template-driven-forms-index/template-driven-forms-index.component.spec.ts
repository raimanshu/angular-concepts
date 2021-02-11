import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsIndexComponent } from './template-driven-forms-index.component';

describe('TemplateDrivenFormsIndexComponent', () => {
  let component: TemplateDrivenFormsIndexComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
