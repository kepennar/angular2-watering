import { ActionReducer, Action } from '@ngrx/store';
import { Plant } from '../../../model/Plant';
import { PlantActions } from '../../actions/index';

export interface PlantsState {
  [index: number]: Plant;
}

const initState: Plant[] = [
  {id: 'test1', name: 'testPlant', watterFrequency: 3},
  {id: 'test2', name: 'pathy', watterFrequency: 5},
]
export const plantsReducer: ActionReducer<Plant[]> = (state: Plant[] = initState, action: Action) => {
  switch (action.type) {
    case PlantActions.ADD:
      return [...state, action.payload];
    case PlantActions.WATERING:
      const { plantId, date } = action.payload;
      const updatedPlant = state.find(p => p.id === plantId);
      updatedPlant.last = date;
      const filtered = state.filter(p => p.id !== plantId);

      return [...filtered, updatedPlant];
    default:
      return state;
  }
};
