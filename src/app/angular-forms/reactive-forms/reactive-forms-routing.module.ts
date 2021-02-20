import { RfInputValidationComponent } from './rf-input-validation/rf-input-validation.component';
import { RfPasswordValidationComponent } from './rf-password-validation/rf-password-validation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsIndexComponent } from './reactive-forms-index/reactive-forms-index.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormsIndexComponent
  },
  {
    path: 'rf-password-validation',
    component: RfPasswordValidationComponent
  },
  {
    path: 'rf-input-validation',
    component: RfInputValidationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
