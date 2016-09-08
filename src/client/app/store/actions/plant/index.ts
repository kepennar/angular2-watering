import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Plant } from '../../../model/Plant';

@Injectable()
export class PlantActions {
  static ADD = '[PLANT] ADD';
  add(newPlant: Plant): Action {
    return {
      type: PlantActions.ADD, payload: newPlant
    };
  }

  static WATERING = '[PLANT] WATERING';
  watering(plantId: string): Action {
    const payload = {
      plantId,
      date: new Date().toDateString()
    };
    return {
      type: PlantActions.WATERING, payload
    };
  }
}