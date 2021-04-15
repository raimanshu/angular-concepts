import { DailyUpdatesModule } from './daily-updates/daily-updates.module';
import { StringInterpolationComponent } from './data-binding/string-interpolation/string-interpolation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';

const routes: Routes = [
  {
    path:'data-binding/string-interpolation', component: StringInterpolationComponent
  },
  {
    path:'data-binding/event-binding', component: EventBindingComponent
  },
  {
    path:'data-binding/property-binding', component: PropertyBindingComponent
  },
  {
    path: 'component-interaction',
    loadChildren: () => import('./component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule)
  },
  {
    path: 'error-list',
    loadChildren: () => import('./errors-list/errors-list.module').then(m => m.ErrorsListModule)
  },
  {
    path: 'subject-behaviour',
    loadChildren: () => import('./subject-behaviour/subject-behaviour.module').then(m => m.SubjectBehaviourModule)
  },
  {
    path: 'life-cycle-hooks',
    loadChildren: () => import('./life-cycle-hooks/life-cycle-hooks.module').then(m => m.LifeCycleHooksModule)
  },
  {
    path: 'angular-forms',
    loadChildren: () => import('./angular-forms/angular-forms.module').then(m => m.AngularFormsModule)
  },
  {
    path: 'daily-updates',
    loadChildren: () => import('./daily-updates/daily-updates.module').then(m => m.DailyUpdatesModule)
  },
  {
    path: 'angular-cli',
    loadChildren: () => import('./angular-cli/angular-cli.module').then(m => m.AngularCliModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
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
