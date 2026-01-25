import { inject, Injectable } from '@angular/core';
import { AuthStoreService } from '@happic/core/auth';
import { ILoginRequest } from '../interfaces/login-request.interface';
import { AuthApiService } from './auth-api.service';
import { catchError, EMPTY, take, tap } from 'rxjs';
import { IAuthResponse } from '../../../../../core/auth/data-access/src/lib/interfaces/auth-response.interface';
import { LoadingStateEnum } from '@happic/core/shared';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../../../core/auth/data-access/src/lib/services/token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthActionsService {
  private authApiService = inject(AuthApiService);
  private authStoreService = inject(AuthStoreService);
  private tokenStorageService = inject(TokenStorageService);
  private router = inject(Router);

  login(payload: ILoginRequest) {
    this.authStoreService.updateState(LoadingStateEnum.LOADING);
    this.authApiService
      .login(payload)
      .pipe(
        take(1),
        tap((response: IAuthResponse) => {
          console.log(response);
          this.authStoreService.updateState(LoadingStateEnum.LOADED);
          this.authStoreService.updateToken(response.access_token);
          this.tokenStorageService.save(response);
          this.authStoreService.updateUserProfile(response.userProfile ?? null);

          this.router.navigate(['/users']);
        }),
        catchError(() => {
          this.authStoreService.updateState(LoadingStateEnum.ERROR);
          return EMPTY;
        }),
      )
      .subscribe();
  }
}
