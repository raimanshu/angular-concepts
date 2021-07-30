import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifferencesRoutingModule } from './differences-routing.module';
import { DiffIndexComponent } from './diff-index/diff-index.component';
import { SliceSpliceComponent } from './slice-splice/slice-splice.component';
import { JavascriptTypescriptComponent } from './javascript-typescript/javascript-typescript.component';


@NgModule({
  declarations: [DiffIndexComponent, SliceSpliceComponent, JavascriptTypescriptComponent],
  imports: [
    CommonModule,
    DifferencesRoutingModule
  ]
})
export class DifferencesModule { }
