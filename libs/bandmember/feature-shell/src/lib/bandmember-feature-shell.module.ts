import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {shellRoutes} from './bandmember-feature-shell.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(shellRoutes),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
})
export class BandmemberFeatureShellModule {}
