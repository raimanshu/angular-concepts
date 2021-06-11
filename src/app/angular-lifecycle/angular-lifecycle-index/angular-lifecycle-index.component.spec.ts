import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifecycleIndexComponent } from './angular-lifecycle-index.component';

describe('AngularLifecycleIndexComponent', () => {
  let component: AngularLifecycleIndexComponent;
  let fixture: ComponentFixture<AngularLifecycleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLifecycleIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLifecycleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
