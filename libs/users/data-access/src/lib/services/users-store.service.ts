import { Injectable, signal, WritableSignal } from '@angular/core';
import { LoadingStateEnum } from '@happic/core/shared';
import { IUserProfile } from '@happic/core/auth';

@Injectable()
export class UsersStoreService {
  private state = signal<LoadingStateEnum>(LoadingStateEnum.INIT);
  private users = signal<IUserProfile[]>([]);

  getState(): WritableSignal<LoadingStateEnum> {
    return this.state;
  }

  updateState(value: LoadingStateEnum): void {
    this.state.set(value);
  }

  getUsers(): WritableSignal<IUserProfile[]> {
    return this.users;
  }

  updateUsers(users: IUserProfile[]) {
    this.users.set(users);
  }
}
