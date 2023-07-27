import { Component } from '@angular/core';
import { SavedRawFileModel } from 'src/app/models/saved-raw-file';

@Component({
  selector: 'app-original-files',
  templateUrl: './original-files.component.html',
  styleUrls: ['./original-files.component.scss']
})
export class OriginalFilesComponent {
  public files: SavedRawFileModel[] = [];

}
