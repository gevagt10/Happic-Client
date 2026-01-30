import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { TokenRefreshService } from '../services/token-refresh-service';
import { getJwtExp } from '../utils/get-jwt-exp.utils';
import { AuthStoreService } from '../services/auth-store.service';

const EXPIRY_BUFFER_MS = 30_000; // refresh 30s before exp

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authStore = inject(AuthStoreService);
  const refreshService = inject(TokenRefreshService);

  const token = authStore.getToken()();

  // No token → just continue
  if (!token) {
    return next(req);
  }

  const exp = getJwtExp(token);
  const shouldRefresh = exp !== null && Date.now() >= exp - EXPIRY_BUFFER_MS;

  const sendWithToken = (accessToken: string) =>
    next(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    );

  // Proactive refresh
  if (shouldRefresh) {
    return refreshService.refresh().pipe(
      switchMap((newToken) => sendWithToken(newToken)),
      catchError(() => throwError(() => new Error('Session expired'))),
    );
  }

  // Normal request + reactive 401 handling
  return sendWithToken(token).pipe(
    catchError((err) => {
      if (err.status !== 401) {
        return throwError(() => err);
      }

      // Fallback refresh
      return refreshService.refresh().pipe(
        switchMap((newToken) => sendWithToken(newToken)),
        catchError(() => throwError(() => err)),
      );
    }),
  );
};
