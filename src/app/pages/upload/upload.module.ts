import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploadComponent } from './upload.component';
import { CollectNameDialogComponent } from './collect-name-dialog/collect-name-dialog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CollectNameDialogComponent, UploadComponent],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [UploadComponent],
  providers: [],
})
export class UploadModule {}
