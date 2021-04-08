import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CliTableComponent } from './cli-table/cli-table.component';

const routes: Routes = [
  {
    path:'', component: CliTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCliRoutingModule { }
