import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffIndexComponent } from './diff-index.component';

describe('DiffIndexComponent', () => {
  let component: DiffIndexComponent;
  let fixture: ComponentFixture<DiffIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
