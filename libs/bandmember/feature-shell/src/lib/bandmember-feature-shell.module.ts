import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@angular/flex-layout';

import {shellRoutes} from './bandmember-feature-shell.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedUiLayoutModule} from '@bandmember/shared/ui-layout'


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(shellRoutes),
    BrowserAnimationsModule,
    SharedUiLayoutModule,
    CoreModule,

  ],
  exports: [RouterModule],
})
export class BandmemberFeatureShellModule {}
