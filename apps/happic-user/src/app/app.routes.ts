import { Route } from '@angular/router';
import { authGuard } from '@happic/core/auth';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@happic/auth/features').then((m) => m.routes),
  },
  {
    path: '',
    canMatch: [authGuard],
    loadChildren: () => import('@happic/main/features').then((m) => m.routes),
  },
  // {
  //   path: 'users',
  //   canMatch: [authGuard],
  //   loadChildren: () => import('@happic/users/features').then((m) => m.routes),
  // },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
