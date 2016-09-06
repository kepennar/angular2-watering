export * from './plants';
import { PlantsState, plantsReducer } from './plants/index';

export const reducers = {
  plants: plantsReducer
};
export interface AppState {
  plants: PlantsState;
};
