import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';


@NgModule({
  declarations: [StringInterpolationComponent, EventBindingComponent],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingModule { }
