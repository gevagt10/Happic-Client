import { Main } from './main';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('@happic/users/features').then((m) => m.routes),
      },
      // {
      //   path: '**',
      //   redirectTo: '/auth/login',
      // },
    ],
  },
  {
    path: '**',
    redirectTo: '/users'
  }
];
