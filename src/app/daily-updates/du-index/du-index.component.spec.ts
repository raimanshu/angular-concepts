import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuIndexComponent } from './du-index.component';

describe('DuIndexComponent', () => {
  let component: DuIndexComponent;
  let fixture: ComponentFixture<DuIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
