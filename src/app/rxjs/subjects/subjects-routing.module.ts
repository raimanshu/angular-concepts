import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectBehaviourComponent } from './subject-behaviour/subject-behaviour.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: '', component: SubjectComponent
  },
  {
    path: 'subject', component: SubjectComponent
  },
  {
    path: 'subject-behaviour', component: SubjectBehaviourComponent
  },
  {
    path: 'replay-subject', component: ReplaySubjectComponent
  },
  {
    path: 'async-subject', component: AsyncSubjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
