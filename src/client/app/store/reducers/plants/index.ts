import { ActionReducer, Action } from '@ngrx/store';
import { PlantActions } from '../../actions/index';

export interface Plant {
  id: string;
  name: string;
  last?: Date;
  watterFrequency: number;
}
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
    case PlantActions.UPDATE:

    default:
      return state;
  }
}