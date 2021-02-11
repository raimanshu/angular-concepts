import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviourComponent } from './subject-behaviour.component';

describe('SubjectBehaviourComponent', () => {
  let component: SubjectBehaviourComponent;
  let fixture: ComponentFixture<SubjectBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBehaviourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
