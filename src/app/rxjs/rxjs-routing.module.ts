import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsIndexComponent } from './rxjs-index/rxjs-index.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: '', component: RxjsIndexComponent
  },
  {
    path: 'subject', component: SubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
