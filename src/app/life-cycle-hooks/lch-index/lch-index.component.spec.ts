import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LchIndexComponent } from './lch-index.component';

describe('LchIndexComponent', () => {
  let component: LchIndexComponent;
  let fixture: ComponentFixture<LchIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LchIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LchIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
