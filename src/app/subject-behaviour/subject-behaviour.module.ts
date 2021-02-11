import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectBehaviourRoutingModule } from './subject-behaviour-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { SubjectBehaviourComponent } from './subject-behaviour.component';



@NgModule({
  declarations: [Component1Component,Component2Component,SubjectBehaviourComponent],
  imports: [
    CommonModule,
    SubjectBehaviourRoutingModule
  ]
})
export class SubjectBehaviourModule { }
