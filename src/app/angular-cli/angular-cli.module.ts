import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularCliRoutingModule } from './angular-cli-routing.module';
import { CliTableComponent } from './cli-table/cli-table.component';


@NgModule({
  declarations: [CliTableComponent],
  imports: [
    CommonModule,
    AngularCliRoutingModule
  ]
})
export class AngularCliModule { }
