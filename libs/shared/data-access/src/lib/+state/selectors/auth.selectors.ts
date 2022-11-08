import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../models/auth.models';
import { AUTH_FEATURE_KEY } from '../reducers/auth.reducer';

export const selectAuth = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectIsSignedIn = createSelector(selectAuth, state => state.isSignedIn);

export const selectSigninError = createSelector(selectAuth, state => state.hasSigninError);

export const selectIsLoadingSignin = createSelector(
  selectAuth,
  state => state.isLoadingSignin
);

export const selectAuthUser = createSelector(selectAuth, state => state.user);