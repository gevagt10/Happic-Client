import { IUserProfile } from '@happic/auth/data-access';

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  'not-before-policy': number;
  session_state: string;
  scope: string;
  userProfile?: IUserProfile;
}
