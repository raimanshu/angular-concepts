import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';
import { LchIndexComponent } from './lch-index/lch-index.component';
import { SharedModule } from '../shared/shared.module';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormModule } from '../angular-forms/reactive-forms/reactive-forms.module';


@NgModule({
  declarations: [LchIndexComponent, SecondComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    LifeCycleHooksRoutingModule,SharedModule,
    FormsModule,ReactiveFormModule
  ]
})
export class LifeCycleHooksModule { }


