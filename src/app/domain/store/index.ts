import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
export interface RootState {
  auth: AuthState;
}

export const appReducer = {
  auth: authReducer,
};

export const appEffects = [AuthEffects];
