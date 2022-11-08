
import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';
import { AuthState, TokenStatus } from '../models/auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  isSignedIn: false,
  user: undefined,
  accessTokenStatus: TokenStatus.PENDING,
  refreshTokenStatus: TokenStatus.PENDING,
  isLoadingSignin: false,
  hasSigninError: false,
};

const reducer = createReducer(
  initialState,

  // Signin
  on(
    AuthActions.signinRequest,
    (state): AuthState => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingSignin: true,
      hasSigninError: false,
    })
  ),

  //Refresh token
  on(
    AuthActions.refreshTokenRequest,
    (state): AuthState => ({
      ...state,
      refreshTokenStatus: TokenStatus.VALIDATING,
    })
  ),

  //Signin & Refresh token
  on(
    AuthActions.signinSuccess,
    AuthActions.refreshTokenSuccess,
    (state): AuthState => ({
      ...state,
      isSignedIn: true,
      isLoadingSignin: false,
      accessTokenStatus: TokenStatus.VALID,
      refreshTokenStatus: TokenStatus.VALID,
    })
  ),
  on(
    AuthActions.signinFailure,
    AuthActions.refreshTokenFailure,
    (state, action): AuthState => ({
      ...state,
      isLoadingSignin: false,
      accessTokenStatus: TokenStatus.INVALID,
      refreshTokenStatus: TokenStatus.INVALID,
      hasSigninError: action.type === '[Auth Effect] Signin Failure' && !!action.error,
    })
  ),

  // Signout
  on(
    AuthActions.signout,
    (): AuthState => ({
      ...initialState,
    })
  ),

  // Auth user
  on(
    AuthActions.getAuthUserSuccess,
    (state, action): AuthState => ({
      ...state,
      user: action.user,
    })
  ),
  on(
    AuthActions.getAuthUserFailure,
    (): AuthState => ({
      ...initialState,
    })
  )
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}
  
