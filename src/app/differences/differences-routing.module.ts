import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiffIndexComponent } from './diff-index/diff-index.component';
import { SliceSpliceComponent } from './slice-splice/slice-splice.component';

const routes: Routes = [
  {
    path: '',
    component: DiffIndexComponent
  },
  {
    path: 'slice_vs_splice',
    component: SliceSpliceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifferencesRoutingModule { }
