import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@bandmember/shared/environments';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { SharedDataAccessModule } from '@bandmember/shared/data-access';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [    
    SharedDataAccessModule,
    HttpClientModule,

     // NgRx
     StoreModule.forRoot({}, {}),
     StoreRouterConnectingModule.forRoot(),
     EffectsModule.forRoot([]),
     environment.production
       ? []
       : StoreDevtoolsModule.instrument({ name: 'Angular Authentication' }),
 
  
  ],
})

export class SharedCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedCoreModule) {
    if (parentModule) {
      throw new Error('SharedCoreModule is already loaded. Import only once in AppModule');
    }
  }
}
