import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFeatureSigninModule } from '@bandmember/auth/feature-signin';
import { AuthFeatureSignupModule } from '@bandmember/auth/feature-signup';


@NgModule({
  imports: [
    CommonModule,
    AuthFeatureSigninModule,
    AuthFeatureSignupModule,
    
  ],
})
export class AuthFeatureShellModule {}
