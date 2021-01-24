import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';


@NgModule({
  declarations: [StringInterpolationComponent],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingModule { }
