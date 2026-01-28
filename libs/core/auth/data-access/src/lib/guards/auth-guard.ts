import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthStoreService } from '../services/auth-store.service';
import { TokenRefreshService } from '../services/token-refresh-service';
import { TokenStorageService } from '../services/token-storage.service';


export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const authStore = inject(AuthStoreService);
  const refreshService = inject(TokenRefreshService);
  const storage = inject(TokenStorageService);
  const router = inject(Router);

  const token = authStore.getToken()();

  if (token) {
    return of(true);
  }

  const refreshToken = storage.refreshToken;

  if (!refreshToken) {
    router.navigate(['/auth/login']);
    return of(false);
  }

  return refreshService.refresh().pipe(
    map((newToken: string) => {
      return !!newToken;
    }),
    catchError(() => {
      router.navigate(['/auth/login']);
      return of(false);
    }),
  );
};
