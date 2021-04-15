import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsIndexComponent } from './rxjs-index/rxjs-index.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [RxjsIndexComponent, SubjectComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
