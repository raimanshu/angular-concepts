import { TdfPasswordValidationComponent } from './tdf-password-validation/tdf-password-validation.component';
import { TemplateDrivenFormsIndexComponent } from './template-driven-forms-index/template-driven-forms-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfInputValidationComponent } from './tdf-input-validation/tdf-input-validation.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormsIndexComponent
  },
  {
    path: 'tdf-password-validation',
    component: TdfPasswordValidationComponent
  },
  {
    path: 'tdf-input-validation',
    component: TdfInputValidationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule { }
