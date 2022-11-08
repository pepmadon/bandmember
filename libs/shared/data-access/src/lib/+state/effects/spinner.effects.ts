import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from '@bandcamp/feature/shared/auth';
import { tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Injectable()
export class SpinnerEffects {

sinneron$ = createEffect(() => 
   this.actions$.pipe(
      ofType(fromAuthActions.signinRequest),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      
        //tap(() => this.spinner())
      ),
    { dispatch: false }
);

  constructor(private actions$: Actions) {}

}
