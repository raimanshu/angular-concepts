import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsheetRoutingModule } from './chartsheet-routing.module';
import { CsAngularComponent } from './cs-angular/cs-angular.component';
import { CsJavascriptComponent } from './cs-javascript/cs-javascript.component';
import { CsGithubComponent } from './cs-github/cs-github.component';
import { ChartsheetIndexComponent } from './chartsheet-index/chartsheet-index.component';


@NgModule({
  declarations: [CsAngularComponent, CsJavascriptComponent, CsGithubComponent, ChartsheetIndexComponent],
  imports: [
    CommonModule,
    ChartsheetRoutingModule
  ]
})
export class ChartsheetModule { }
