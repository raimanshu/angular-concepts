import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsIndexComponent } from './reactive-forms-index/reactive-forms-index.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
