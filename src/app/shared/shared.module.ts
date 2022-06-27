import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidnavComponent } from './layout/sidnav/sidnav.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidnavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
