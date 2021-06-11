import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularLifecycleRoutingModule } from './angular-lifecycle-routing.module';
import { AngularLifecycleIndexComponent } from './angular-lifecycle-index/angular-lifecycle-index.component';


@NgModule({
  declarations: [AngularLifecycleIndexComponent],
  imports: [
    CommonModule,
    AngularLifecycleRoutingModule
  ]
})
export class AngularLifecycleModule { }
