import { Injectable, signal, WritableSignal } from '@angular/core';
import { IUserProfile } from '@happic/auth/data-access';
import { LoadingStateEnum } from '@happic/core/shared';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  private state = signal<LoadingStateEnum>(LoadingStateEnum.INIT);
  private userProfile = signal<IUserProfile | null>(null);
  private token = signal<string | null>(null);

  getToken(): WritableSignal<string | null> {
    return this.token;
  }

  updateToken(value: string | null): void {
    this.token.set(value);
  }

  getUserProfile(): WritableSignal<IUserProfile | null> {
    return this.userProfile;
  }

  updateUserProfile(value: IUserProfile | null) {
    this.userProfile.set(value);
  }

  getState(): WritableSignal<LoadingStateEnum> {
    return this.state;
  }
  updateState(value: LoadingStateEnum): void {
    this.state.set(value);
  }
}
