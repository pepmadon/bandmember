import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

// import { AuthUser } from '../+state/auth.models';
import { AuthService } from '@bandcamp/feature/shared/auth';

import {TokenStorageService} from '@bandcamp/feature/shared/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()

export class AuthEffects {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private actions$: Actions,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) {}



  signin$ = createEffect(() => {
    return this.actions$.pipe(
      // Filters by Action Creator 'login'
      ofType(AuthActions.signinRequest),
      exhaustMap(credentials =>
        this.authService.signin(credentials.email, credentials.password).pipe(
          map(data => { 
            console.log(data.access_token, data.refresh_token);
            // save tokens
            this.tokenStorageService.saveTokens(data.access_token, data.refresh_token);
            // trigger refresh token success action    
            return AuthActions.signinSuccess();
          }),
          catchError(error => of(AuthActions.signinFailure({error})))
        )
      )
    );
  });

  onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signinSuccess),
      map(() => {
        // redirect to return url or home
        this.router.navigateByUrl(
          this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
        );
        return AuthActions.getAuthUserRequest();
      })
    );
  });

  signout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.signout),
        exhaustMap(() => {
          this.router.navigateByUrl('/');
          return this.authService
            .signout()
            .pipe(finalize(() => this.tokenStorageService.removeTokens()));
        })
      );
    },
    { dispatch: false }
  );

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenSuccess, AuthActions.getAuthUserRequest),
      exhaustMap(() =>
        this.authService.getAuthUser().pipe(
          map(user => AuthActions.getAuthUserSuccess({ user })),
          catchError(() => of(AuthActions.getAuthUserFailure()))
        )
      )
    );
  });

  refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenRequest),
      exhaustMap(() =>
        this.authService.refreshToken().pipe(
          map(data => {
            // save tokens
            this.tokenStorageService.saveTokens(data.access_token, data.refresh_token);
            // trigger refresh token success action
            return AuthActions.refreshTokenSuccess();
          }),
          catchError(() => of(AuthActions.refreshTokenFailure()))
        )
      )
    );
  });

  onSigninOrRefreshTokenFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.signinFailure, AuthActions.refreshTokenFailure),
        tap(() => {
          this.tokenStorageService.removeTokens();
        })
      );
    },
    { dispatch: false }
  );




}
