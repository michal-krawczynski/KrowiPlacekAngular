import { Routes } from '@angular/router';
import {Menu} from './components/menu/menu';
import {MenuDetail} from './components/menu-detail/menu-detail';

export const routes: Routes = [
  {
    path: 'menu', component: Menu
  },
  {
    path: 'menu-detail/:id', component: MenuDetail
  }
];
