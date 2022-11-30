import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { HomeState } from './home/home.state';
import { homeReducer } from './home/home.reducer';
import { HomeEffects } from './home/home.effects';
export interface RootState {
  auth: AuthState;
  home: HomeState;
}

export const appReducer = {
  auth: authReducer,
  home: homeReducer,
};

export const appEffects = [AuthEffects, HomeEffects];
