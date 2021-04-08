// import { DuIndexComponent } from './du-index/du-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuIndexComponent } from './du-index/du-index.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {
    path:'', component: DuIndexComponent
  },
  {
    path:'references', component: ReferencesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyUpdatesRoutingModule { }
