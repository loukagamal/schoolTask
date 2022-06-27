import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: async () => await import('../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'configurations',
        loadChildren: async () => await import('../modules/configurations/configurations.module').then((m) => m.ConfigurationsModule),
      },
    ],
  },
  { path: '**', redirectTo: '/app/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
