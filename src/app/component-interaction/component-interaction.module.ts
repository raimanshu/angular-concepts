import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { ComponentInteractionComponent } from './component-interaction.component';



@NgModule({
  declarations: [ComponentInteractionComponent,Component1Component,Component2Component],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ]
})
export class ComponentInteractionModule { }
