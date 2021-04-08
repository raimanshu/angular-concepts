import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';


@NgModule({
  declarations: [StringInterpolationComponent, EventBindingComponent, PropertyBindingComponent, ClassBindingComponent],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingModule { }
