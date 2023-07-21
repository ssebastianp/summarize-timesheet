import { Action, createReducer, on } from '@ngrx/store';
import { fileSave, fileRemove } from './files.actions';
import { SavedRawFileModel } from 'src/app/models/saved-raw-file';

export const initialState: SavedRawFileModel[] = [];

const _fileReducer = createReducer(initialState,
  on(fileSave, (state, props: { payload: SavedRawFileModel; }) => [...state, props.payload]),
  on(fileRemove, (state, props: { payload: number; }) => state.filter(f => f.id !== props.payload))
);

export function filesReducer(state: SavedRawFileModel[], action: Action) {
  return _fileReducer(state, action);
}