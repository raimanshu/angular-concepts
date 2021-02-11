import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { SubjectBehaviourComponent } from './subject-behaviour.component';
// import { SubjectBehaviourIndexComponent } from './subject-behaviour-index/subject-behaviour-index.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectBehaviourComponent
  },
  {
    path: '1',
    component: Component1Component
  },
  {
    path: '2',
    component: Component2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectBehaviourRoutingModule { }
