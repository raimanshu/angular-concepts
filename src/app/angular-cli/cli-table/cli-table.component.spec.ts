import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliTableComponent } from './cli-table.component';

describe('CliTableComponent', () => {
  let component: CliTableComponent;
  let fixture: ComponentFixture<CliTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
