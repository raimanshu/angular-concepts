import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LchIndexComponent } from './lch-index/lch-index.component';

const routes: Routes = [
  {
    path: '',
    component: LchIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHooksRoutingModule { }
