import { SubjectsModule } from './subjects/subjects.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsIndexComponent } from './rxjs-index/rxjs-index.component';


const routes: Routes = [
  {
    path: '', component: RxjsIndexComponent
  },
  // {
  //   path: 'subject', component: SubjectComponent
  // },
  // {
  //   path: 'subject-behaviour', component: SubjectBehaviourComponent
  // },
  // {
  //   path: 'replay-subject', component: ReplaySubjectComponent
  // },
  // {
  //   path: 'async-subject', component: AsyncSubjectComponent
  // },
  // { path: '',   redirectTo: 'subjects', pathMatch: 'full' }, // redirect to `first-component`

  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  // {
  //   path: 'operators',
  //   loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
