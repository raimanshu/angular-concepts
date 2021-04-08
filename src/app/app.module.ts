import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,
    ComponentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
