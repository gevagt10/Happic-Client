import { inject, Injectable } from '@angular/core';
import { UsersApiService } from './users-api.service';
import { take, tap } from 'rxjs';
import { IUserProfile } from '@happic/core/auth';

@Injectable()
export class UsersActionsService {
  private usersApiService = inject(UsersApiService);

  getUsers(): void {
    this.usersApiService.getUsers()
      .pipe(
        take(1),
        tap((users: IUserProfile[]) => {
          console.log(users)
        })
      )
      .subscribe();
  }
}
