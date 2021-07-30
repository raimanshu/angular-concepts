import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceSpliceComponent } from './slice-splice.component';

describe('SliceSpliceComponent', () => {
  let component: SliceSpliceComponent;
  let fixture: ComponentFixture<SliceSpliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliceSpliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliceSpliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
