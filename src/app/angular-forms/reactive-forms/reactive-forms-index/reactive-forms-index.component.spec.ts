import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsIndexComponent } from './reactive-forms-index.component';

describe('ReactiveFormsIndexComponent', () => {
  let component: ReactiveFormsIndexComponent;
  let fixture: ComponentFixture<ReactiveFormsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
