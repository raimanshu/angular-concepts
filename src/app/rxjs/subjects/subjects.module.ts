import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { SubjectBehaviourComponent } from './subject-behaviour/subject-behaviour.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';


@NgModule({
  declarations: [SubjectComponent, SubjectBehaviourComponent, ReplaySubjectComponent, AsyncSubjectComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
