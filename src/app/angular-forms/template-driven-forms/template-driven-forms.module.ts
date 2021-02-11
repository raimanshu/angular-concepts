import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { TemplateDrivenFormsIndexComponent } from './template-driven-forms-index/template-driven-forms-index.component';
import { FormsModule } from '@angular/forms';
import { TdfInputValidationComponent } from './tdf-input-validation/tdf-input-validation.component';
import { TdfPasswordValidationComponent } from './tdf-password-validation/tdf-password-validation.component';


@NgModule({
  declarations: [TemplateDrivenFormsIndexComponent, TdfInputValidationComponent, TdfPasswordValidationComponent],
  imports: [
    CommonModule,
    TemplateDrivenFormsRoutingModule,
    FormsModule
  ]
})
export class TemplateDrivenFormsModule { }
