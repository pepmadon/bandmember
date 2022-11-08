import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthState, TokenStatus } from '../+state/auth.models';
import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { lastValueFrom, Observable, throwError, tap } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ConfigService, TokenStorageService } from '@bandmember/shared/core';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '../+state/auth.actions';
import * as fromAuthSelectors from '../+state/auth.selectors';

// import {User} from '@prisma/client'

import { AuthUser } from '../+state/auth.models';

export interface AccessData {
  token_type: 'Bearer';
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

@Injectable()
export class AuthService {
  private hostUrl: string;
  // private clientId: string;
  // private clientSecret: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private tokenStorageService: TokenStorageService,
    private store: Store,
    
  ) {
    this.hostUrl = this.configService.getAPIUrl();
    // const authConfig = this.configService.getAuthSettings();
    // this.clientId = authConfig.clientId;
    // this.clientSecret = authConfig.secretId;
  }

  /**
   * Returns a promise that waits until
   * refresh token and get auth user
   *
   * @returns {Promise<AuthState>}
   */
   init(): Promise<AuthState> {
    this.store.dispatch(fromAuthActions.refreshTokenRequest());

    const authState$ = this.store.select(fromAuthSelectors.selectAuth).pipe(
      filter(
        auth =>
          auth.refreshTokenStatus === TokenStatus.INVALID ||
          (auth.refreshTokenStatus === TokenStatus.VALID && !!auth.user)
      ),
      tap(auth => console.log('final '+ auth.refreshTokenStatus,  'auth ' + auth.user)),
      take(1)
    );

    return lastValueFrom(authState$);
  }

  signup(){
   return {mesg:"I have signed up"};
  }

  // signin() {
  //   return {mesg:"I have signed in"};
  // }


  /**
   * Performs a request with user credentials
   * in order to get auth tokens
   *
   * @param {string} email
   * @param {string} password
   * @returns Observable<AccessData>
   */
  signin(email: string, password: string): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}/api/auth/signin`, {

      // grant_type: 'password',
      email,
      password,
    });
  }

  /**
   * Performs a request for logout authenticated user
   *
   * @param {('all' | 'allButCurrent' | 'current')} [clients='current']
   * @returns Observable<void>
   */
   signout(clients: 'all' | 'allButCurrent' | 'current' = 'current'): Observable<void> {
    const params = new HttpParams().append('clients', clients);

    return this.http.get<void>(`${this.hostUrl}/api/auth/signout`, { params });
  }

  /**
   * Asks for a new access token given
   * the stored refresh token
   *
   * @returns {Observable<AccessData>}
   */
  refreshToken(): Observable<AccessData> {
    const refreshToken = this.tokenStorageService.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('Refresh token does not exist'));
    }

    return this.http.post<AccessData>(`${this.hostUrl}/api/auth//signin`, {
      // client_id: this.clientId,
      // client_secret: this.clientSecret,
     // access_token: accessToken,
      refresh_token: refreshToken,
    });
  }

  /**
   * Returns authenticated user
   * based on saved access token
   *
   * @returns {Observable<AuthUser>}
   */
  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}/api/users/me`);
  }
}

         


export const authServiceInitProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: (authService: AuthService) => () => authService.init(),
  deps: [AuthService],
  multi: true,
};