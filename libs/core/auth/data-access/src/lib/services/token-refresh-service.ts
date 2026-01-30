import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  take,
  tap,
  throwError,
} from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { AuthApiService } from './auth-api.service';
import { AuthStoreService, IAuthResponse } from '@happic/core/auth';

@Injectable({ providedIn: 'root' })
export class TokenRefreshService {
  private authStoreService = inject(AuthStoreService);
  private tokenStorageService = inject(TokenStorageService);
  private authApiService = inject(AuthApiService);

  private refresh$ = new BehaviorSubject<string | null>(null);
  private refreshing = false;

  refresh(): Observable<string> {
    if (this.refreshing) {
      return this.refresh$.pipe(filter(Boolean), take(1));
    }

    const refreshToken = this.tokenStorageService.refreshToken;

    if (!refreshToken) {
      this.refreshing = false;
      this.tokenStorageService.clear();
      return throwError(() => new Error('No refresh token available'));
    }

    this.refreshing = true;
    this.refresh$.next(null);

    // Check if AuthStore has not token
    const accessToken = this.tokenStorageService.accessToken;
    if (accessToken && !refreshToken) this.authStoreService.updateToken(accessToken);

    return this.authApiService.refreshToken(refreshToken).pipe(
      tap((res: IAuthResponse) => this.tokenStorageService.save(res)),
      map((res: IAuthResponse) => res.access_token),
      tap((token: string) => {
        this.refreshing = false;
        this.refresh$.next(token);
        this.authStoreService.updateToken(token);
      }),
      catchError((err) => {
        this.refreshing = false;
        this.tokenStorageService.clear();
        return throwError(() => err);
      }),
    );
  }
}
