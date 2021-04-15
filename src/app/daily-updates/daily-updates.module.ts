import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyUpdatesRoutingModule } from './daily-updates-routing.module';
import { DuIndexComponent } from './du-index/du-index.component';
import { ReferencesComponent } from './references/references.component';
import { PreviewVideoComponent } from './preview-video/preview-video.component';
import { ExternalJsFileCommComponent } from './external-js-file-comm/external-js-file-comm.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DuIndexComponent, ReferencesComponent, PreviewVideoComponent, ExternalJsFileCommComponent],
  imports: [
    CommonModule,
    DailyUpdatesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DailyUpdatesModule { }
