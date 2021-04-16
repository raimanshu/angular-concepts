import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsIndexComponent } from './rxjs-index/rxjs-index.component';
import { SubjectsModule } from './subjects/subjects.module';



@NgModule({
  declarations: [RxjsIndexComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    SubjectsModule
  ]
})
export class RxjsModule { }
