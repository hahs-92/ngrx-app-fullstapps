import { ILogin } from '../../../core/models/auth.model';

export interface AuthState {
  loginData: ILogin | null;
  isLoading: boolean;
  isError: string | null;
}
