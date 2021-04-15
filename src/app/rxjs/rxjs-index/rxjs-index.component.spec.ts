import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIndexComponent } from './rxjs-index.component';

describe('RxjsIndexComponent', () => {
  let component: RxjsIndexComponent;
  let fixture: ComponentFixture<RxjsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
