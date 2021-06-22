import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAngularComponent } from './cs-angular.component';

describe('CsAngularComponent', () => {
  let component: CsAngularComponent;
  let fixture: ComponentFixture<CsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
