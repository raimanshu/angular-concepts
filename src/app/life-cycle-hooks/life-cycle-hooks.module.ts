import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';
import { LchIndexComponent } from './lch-index/lch-index.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LchIndexComponent],
  imports: [
    CommonModule,
    LifeCycleHooksRoutingModule,SharedModule
  ]
})
export class LifeCycleHooksModule { }


