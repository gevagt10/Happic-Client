import { inject, Injectable } from '@angular/core';
import { RestApiService } from '@happic/core/shared';
import { Observable } from 'rxjs';
import { ILoginRequest } from '@happic/auth/data-access';
import { IAuthResponse } from '@happic/core/auth';

@Injectable({providedIn: 'root'})
export class AuthApiService {
  private restApiService = inject(RestApiService);
  login(data: ILoginRequest): Observable<IAuthResponse> {
    return this.restApiService.post(`auth/login`, data);
  }
}
