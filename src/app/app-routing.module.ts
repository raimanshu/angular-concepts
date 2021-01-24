import { StringInterpolationComponent } from './data-binding/string-interpolation/string-interpolation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path:'data-binding/string-interpolation', component: StringInterpolationComponent
  },
  {
    path:'intro', component: IntroComponent
  },
  { path: '',   redirectTo: 'intro', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: IntroComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
