import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {metaReducers, reducers} from './+state/reducers/app.reducers';
import {environment} from '@bandmember/shared/environments';

// @NgModule({
//   imports: [CommonModule, EffectsModule.forRoot([AppEffects])],
// })

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
  ],
})

export class SharedDataAccessModule {
  static forRoot: any;
}
