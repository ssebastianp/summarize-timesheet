import { loadingStart, loadingEnd } from './loading/loading.actions';
import { loadingReducer } from './loading/loading.reducer';

import { fileSave, fileRemove } from './files/files.actions';
import { filesReducer } from './files/files.reducer';

export { loadingReducer, loadingStart, loadingEnd };
export { filesReducer, fileSave, fileRemove };