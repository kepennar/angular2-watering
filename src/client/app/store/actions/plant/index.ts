import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Plant } from '../../reducers';

@Injectable()
export class PlantActions {
  static ADD = '[PLANT] ADD';
  add(newPlant: Plant): Action {
    return {
      type: PlantActions.ADD, payload: newPlant
    };
  }

  static UPDATE = '[PLANT] UPDATE';
  update(newPlants: Plant[]): Action {
    return {
      type: PlantActions.UPDATE, payload: newPlants
    };
  }
}