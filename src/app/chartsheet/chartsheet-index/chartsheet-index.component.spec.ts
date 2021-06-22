import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsheetIndexComponent } from './chartsheet-index.component';

describe('ChartsheetIndexComponent', () => {
  let component: ChartsheetIndexComponent;
  let fixture: ComponentFixture<ChartsheetIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsheetIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsheetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
