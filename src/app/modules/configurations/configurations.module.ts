import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SchoolInfoComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

  ]
})
export class ConfigurationsModule { }
