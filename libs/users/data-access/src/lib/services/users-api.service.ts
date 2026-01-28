import { inject, Injectable } from '@angular/core';
import { RestApiService } from '@happic/core/shared';
import { Observable } from 'rxjs';
import { IUserProfile } from '@happic/core/auth';

@Injectable({providedIn: 'root'})
export class UsersApiService {
  private restApiService = inject(RestApiService);

  getUsers(): Observable<IUserProfile[]> {
    return this.restApiService.get('users');
  }
}
