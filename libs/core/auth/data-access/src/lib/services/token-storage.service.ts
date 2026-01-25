import { Injectable } from '@angular/core';
import { IAuthResponse } from '../interfaces/auth-response.interface';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private readonly ACCESS = 'access_token';
  private readonly REFRESH = 'refresh_token';
  private readonly EXPIRES_AT = 'expires_at';

  save(token: IAuthResponse) {
    const expiresAt = Date.now() + token.expires_in * 1000;

    localStorage.setItem(this.ACCESS, token.access_token);
    localStorage.setItem(this.REFRESH, token.refresh_token);
    localStorage.setItem(this.EXPIRES_AT, expiresAt.toString());
  }

  get accessToken(): string | null {
    return localStorage.getItem(this.ACCESS);
  }

  get refreshToken(): string | null {
    return localStorage.getItem(this.REFRESH);
  }

  get isExpired(): boolean {
    const exp = Number(localStorage.getItem(this.EXPIRES_AT));
    return !exp || Date.now() > exp;
  }

  clear() {
    localStorage.clear();
  }
}
