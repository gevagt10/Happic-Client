import { inject, Injectable } from '@angular/core';
import { RestApiService } from '@happic/core/shared';
import { IAuthResponse } from '../interfaces/auth-response.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private restApiService = inject(RestApiService);

  refreshToken(refreshToken: string): Observable<IAuthResponse> {
    return this.restApiService.post<IAuthResponse>(`auth/refresh`, {
      refreshToken,
    });
  }
}
