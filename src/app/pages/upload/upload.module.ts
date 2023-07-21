import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploadComponent } from './upload.component';
import { CollectNameDialogComponent } from './collect-name-dialog/collect-name-dialog.component';

@NgModule({
  declarations: [
    CollectNameDialogComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [UploadComponent],
  providers: [],
})
export class UploadModule { }
