import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@happic/shop/feature-products').then(m => m.featureProductsRoutes),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@happic/shop/feature-product-detail').then(
        m => m.featureProductDetailRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
