import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyUpdatesRoutingModule } from './daily-updates-routing.module';
import { DuIndexComponent } from './du-index/du-index.component';
import { ReferencesComponent } from './references/references.component';


@NgModule({
  declarations: [DuIndexComponent, ReferencesComponent],
  imports: [
    CommonModule,
    DailyUpdatesRoutingModule
  ]
})
export class DailyUpdatesModule { }
