import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectScrollingComponent } from './detect-scrolling.component';

describe('DetectScrollingComponent', () => {
  let component: DetectScrollingComponent;
  let fixture: ComponentFixture<DetectScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectScrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
