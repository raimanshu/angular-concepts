import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsListRoutingModule } from './errors-list-routing.module';
import { ErrorsListIndexComponent } from './errors-list-index/errors-list-index.component';


@NgModule({
  declarations: [ErrorsListIndexComponent],
  imports: [
    CommonModule,
    ErrorsListRoutingModule
  ]
})
export class ErrorsListModule { }
