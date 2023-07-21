import { Action, createReducer, on } from '@ngrx/store';
import { loadingStart, loadingEnd } from './loading.actions';
 
export const initialState = 0;
 
const _loadingReducer = createReducer(initialState,
  on(loadingStart, state => state + 1),
  on(loadingEnd, state => {
    if(state > 0)
    {
      return state - 1;
    }
    return state;
  })
);
 
export function loadingReducer(state: number, action: Action) {
  return _loadingReducer(state, action);
}