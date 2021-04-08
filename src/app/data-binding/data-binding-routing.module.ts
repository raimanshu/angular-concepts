import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

const routes: Routes = [
  {
    path:'', component: StringInterpolationComponent
  },
  {
    path:'property-binding', component: PropertyBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
