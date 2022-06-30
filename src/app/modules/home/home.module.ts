import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutes } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  // imports: [
  //   CommonModule,
  //   HomeRoutingModule
  // ]
   imports: [CommonModule, RouterModule.forChild(HomeRoutes), TranslateModule],
})
export class HomeModule { }
