import { RawFileModel } from './raw-file.model';

export interface SavedRawFileModel {
  id: number;
  name: string;
  file: RawFileModel[]
}