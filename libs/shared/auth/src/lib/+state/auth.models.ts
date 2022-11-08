export enum TokenStatus {
    PENDING = 'PENDING',
    VALIDATING = 'VALIDATING',
    VALID = 'VALID',
    INVALID = 'INVALID',
  }
  
  export interface AuthState {
    isSignedIn: boolean;
    user?: AuthUser;
    accessTokenStatus: TokenStatus;
    refreshTokenStatus: TokenStatus;
    isLoadingSignin: boolean;
    hasSigninError: boolean;
  }
  
  export interface AuthUser {
    id: number;
    firstName: string;
    lastName: string;
  }
  