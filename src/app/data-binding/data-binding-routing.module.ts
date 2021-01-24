import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

const routes: Routes = [
  {
    path:'', component: StringInterpolationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
