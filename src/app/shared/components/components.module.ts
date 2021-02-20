import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [SideNavComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SideNavComponent, HeaderComponent]
})
export class ComponentsModule { }
