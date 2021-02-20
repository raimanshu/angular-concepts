import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFormsComponent } from './angular-forms.component';

const routes: Routes = [
  {
    path: '',
    component: AngularFormsComponent
  },
  {
    path: 'reactive-forms',
    loadChildren: () => import('./reactive-forms/reactive-forms.module').then(m => m.ReactiveFormModule)
  },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./template-driven-forms/template-driven-forms.module').then(m => m.TemplateDrivenFormsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
