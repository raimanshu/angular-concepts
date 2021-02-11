import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsIndexComponent } from './reactive-forms-index/reactive-forms-index.component';


@NgModule({
  declarations: [ReactiveFormsIndexComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule
  ]
})
export class ReactiveFormsModule { }
