import { ActionReducer, Action } from '@ngrx/store';

export interface Plant {
  name: string;
  watterFrequency: number;
}
export interface PlantsState {
  [index: number]: Plant;
}
export const ADD_PLANT = 'ADD_PLANT';

export const plantsReducer: ActionReducer<Plant[]> = (state: Plant[] = [], action: Action) => {
  switch (action.type) {
    case ADD_PLANT:
      return [...state, action.payload];
    default:
      return state;
  }
}