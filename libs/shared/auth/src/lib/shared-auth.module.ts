//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiSigninModule } from '@bandmember/shared/ui-signin';
import { SharedUiSignupModule } from '@bandmember/shared/ui-signup';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor spec';
import { AuthService, authServiceInitProvider } from './services';
import { RouterModule } from '@angular/router';
import { AUTH_FEATURE_KEY, authReducer, AuthEffects } from './+state';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule, 
    SharedUiSigninModule, 
    SharedUiSignupModule,
    RouterModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
 
  ],
  providers: [ AuthService, authServiceInitProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class SharedAuthModule {}
