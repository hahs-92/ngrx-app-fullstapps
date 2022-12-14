import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';

import * as authActions from './auth.actions';
import { AuthService } from '../../../data/services/auth/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private _authService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAction),
      exhaustMap((action) =>
        this._authService.login(action.data).pipe(
          map((response) => {
            console.log('resp: ', response);
            localStorage.setItem('sales.token', response.jwt);
            return authActions.loginSuccessAction();
          }),
          catchError((error) => {
            console.error('err: ', error);
            return of(
              authActions.loginErrorAction({
                message: 'Usuario o password incorrecto',
              })
            );
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccessAction),
        tap((_) => {
          this._router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
}
