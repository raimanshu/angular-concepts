import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsListIndexComponent } from './errors-list-index.component';

describe('ErrorsListIndexComponent', () => {
  let component: ErrorsListIndexComponent;
  let fixture: ComponentFixture<ErrorsListIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsListIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
