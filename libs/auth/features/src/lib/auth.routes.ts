import {Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register').then(
            (m) => m.Register,
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];

