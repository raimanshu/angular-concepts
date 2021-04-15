import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalJsFileCommComponent } from './external-js-file-comm.component';

describe('ExternalJsFileCommComponent', () => {
  let component: ExternalJsFileCommComponent;
  let fixture: ComponentFixture<ExternalJsFileCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalJsFileCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalJsFileCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
