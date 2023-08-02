import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTabPage } from './menu-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabPage,
    children: [
      {
        path: 'faq',
        loadChildren: () => import('../faq/faq.module').then( m => m.FaqPageModule)
      },
      {
        path: 'information',
        loadChildren: () => import('../information/information.module').then( m => m.InformationPageModule)
      },
      {
        path: '',
        redirectTo: 'faq',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabPageRoutingModule {}
