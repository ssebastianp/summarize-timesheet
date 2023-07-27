import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimeSheetsComponent } from './time-sheets.component';
import { OriginalFilesComponent } from './components/original-files/original-files.component';
import { AggregatedFilesComponent } from './components/aggregated-files/aggregated-files.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    TimeSheetsComponent,
    OriginalFilesComponent,
    AggregatedFilesComponent,
  ],
  imports: [BrowserModule, MatTableModule],
  exports: [TimeSheetsComponent],
  providers: [],
})
export class TimeSheetsModule {}
