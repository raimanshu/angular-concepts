// import { DuIndexComponent } from './du-index/du-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuIndexComponent } from './du-index/du-index.component';
import { ExternalJsFileCommComponent } from './external-js-file-comm/external-js-file-comm.component';
import { PreviewVideoComponent } from './preview-video/preview-video.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {
    path:'', component: DuIndexComponent
  },
  {
    path:'references', component: ReferencesComponent
  },
  {
    path:'preview_image_video', component: PreviewVideoComponent
  },
  {
    path:'external_js_file_comm', component: ExternalJsFileCommComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyUpdatesRoutingModule { }
