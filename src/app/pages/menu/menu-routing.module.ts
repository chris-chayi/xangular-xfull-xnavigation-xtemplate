import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      },
      // {
      //   path: 'home',
      //   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      // },
      // {
      //   path: 'account',
      //   loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      // },
      // {
      //   path: 'home/details',
      //   loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      // },
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
