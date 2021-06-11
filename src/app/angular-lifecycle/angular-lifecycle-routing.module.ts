import { AngularLifecycleIndexComponent } from './angular-lifecycle-index/angular-lifecycle-index.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:AngularLifecycleIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularLifecycleRoutingModule { }
