import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsJavascriptComponent } from './cs-javascript.component';

describe('CsJavascriptComponent', () => {
  let component: CsJavascriptComponent;
  let fixture: ComponentFixture<CsJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
