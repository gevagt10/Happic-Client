import { inject, Injectable } from '@angular/core';
import { RestApiService } from '@happic/core/shared';
import { Observable, take, tap } from 'rxjs';
import { IUserProfile } from '@happic/auth/data-access';

@Injectable({providedIn: 'root'})
export class UsersApiService {
  private restApiService = inject(RestApiService);

  getUsers(): Observable<IUserProfile[]> {
    return this.restApiService.get('users');
  }
}
