import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolInfoComponent } from './school-info/school-info.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolInfoComponent
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
