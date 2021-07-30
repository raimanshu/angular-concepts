import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTypescriptComponent } from './javascript-typescript.component';

describe('JavascriptTypescriptComponent', () => {
  let component: JavascriptTypescriptComponent;
  let fixture: ComponentFixture<JavascriptTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptTypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
