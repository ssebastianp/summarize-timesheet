import { Component } from '@angular/core';
import { SavedRawFileModel } from 'src/app/models/saved-raw-file';

@Component({
  selector: 'app-aggregated-files',
  templateUrl: './aggregated-files.component.html',
  styleUrls: ['./aggregated-files.component.scss'],
})
export class AggregatedFilesComponent {
  public files: SavedRawFileModel[] = [];
}
