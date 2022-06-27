import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { SchoolInfoComponent } from './school-info/school-info.component';


@NgModule({
  declarations: [
    SchoolInfoComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule
  ]
})
export class ConfigurationsModule { }
