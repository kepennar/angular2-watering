import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { PlantActions } from '../actions';

@Injectable()
export class Effects {
  constructor(private actions$: Actions) { }

  @Effect() login$ = this.actions$
    .ofType(PlantActions.UPDATE)
    .map(action => action.payload);
}