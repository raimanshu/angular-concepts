import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsheetIndexComponent } from './chartsheet-index/chartsheet-index.component';

const routes: Routes = [
  {
    path:'index', component: ChartsheetIndexComponent
  },
  { path: '',   redirectTo: 'index', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ChartsheetIndexComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsheetRoutingModule { }
