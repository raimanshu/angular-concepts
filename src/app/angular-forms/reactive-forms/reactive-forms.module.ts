import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsIndexComponent } from './reactive-forms-index/reactive-forms-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RfPasswordValidationComponent } from './rf-password-validation/rf-password-validation.component';
import { RfInputValidationComponent } from './rf-input-validation/rf-input-validation.component';


@NgModule({
  declarations: [ReactiveFormsIndexComponent, RfPasswordValidationComponent, RfInputValidationComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
