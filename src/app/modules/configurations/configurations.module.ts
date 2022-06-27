import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SchoolInfoComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfigurationsModule { }
