import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LandingComponent } from '@bandmember/bandmember/landing/feature-landing';


export const landingRoutes: Route[] = [
  {
      path: '',
      component: LandingComponent,
  },

];


@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(landingRoutes),
  ],

  exports: [RouterModule],
})
export class FeatureShellModule {}
