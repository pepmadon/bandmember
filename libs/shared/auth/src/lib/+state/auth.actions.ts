import { AuthUser } from './auth.models';


import { createAction, props } from '@ngrx/store';


// Signin
export const signinRequest = createAction(
  '[Signin Modal Component] Signin Request',
  props<{ email: string; password: string }>()
);
export const signinSuccess = createAction('[Auth Effect] Signin Success');
export const signinFailure = createAction(
  '[Auth Effect] Signin Failure',
  props<{ error: Error }>()
);

// Logout
export const signout = createAction('[Signout Modal Component] Signout');

// Auth User: me
export const getAuthUserRequest = createAction('[Auth] Auth Get Current User Request');
export const getAuthUserSuccess = createAction(
  '[Auth Effect] Auth Get Current User Success',
  props<{ user: AuthUser }>()
);
export const getAuthUserFailure = createAction('[Auth Effect] Auth Get User Failure');

// Refresh token
export const refreshTokenRequest = createAction('[Auth] Refresh Token Request');
export const refreshTokenSuccess = createAction('[Auth Effect] Refresh Token Success');
export const refreshTokenFailure = createAction('[Auth Effect] Refresh Token Failure');



