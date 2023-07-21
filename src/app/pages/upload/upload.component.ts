import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RawFileModel } from 'src/app/models/raw-file.model';
import { FileService } from 'src/app/services/file.service';
import { fileSave } from 'src/app/store';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  private file?: RawFileModel[];

  constructor(private store: Store, private fileService: FileService) { }

  public onSelect(event: any): void {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.file = this.fileService.csvFileToJson(fileReader.result as string);
    };
    fileReader.readAsText(event.target.files[0]);

  }

  public onFileNameSet(name: string): void {
    this.store.dispatch(fileSave({
      payload: {
        id: Date.now(),
        name,
        file: this.file!
      }
    }));
  }
}
