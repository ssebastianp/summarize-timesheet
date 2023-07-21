import { createAction, props } from '@ngrx/store';
import { SavedRawFileModel } from 'src/app/models/saved-raw-file';

export const fileSave = createAction('File Save', props<{ payload: SavedRawFileModel; }>());
export const fileRemove = createAction('File Remove', props<{ payload: number; }>());
