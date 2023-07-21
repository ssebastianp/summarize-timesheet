import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimeSheetsComponent } from './time-sheets.component';
import { OriginalFilesComponent } from './components/original-files/original-files.component';
import { AggregatedFilesComponent } from './components/aggregated-files/aggregated-files.component';


@NgModule({
  declarations: [
    TimeSheetsComponent,
    OriginalFilesComponent,
    AggregatedFilesComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [TimeSheetsComponent],
  providers: [],
})
export class TimeSheetsModule { }
