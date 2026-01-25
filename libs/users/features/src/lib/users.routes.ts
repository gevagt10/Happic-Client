import { Routes } from '@angular/router';
import { Users } from './users';

export const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./users-list/users-list').then((m) => m.Users),
      },
    ],
  },
];
