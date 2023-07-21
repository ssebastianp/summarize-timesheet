import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TimeSheetsComponent } from './pages/time-sheets/time-sheets.component';
import { OriginalFilesComponent } from './pages/time-sheets/components/original-files/original-files.component';
import { AggregatedFilesComponent } from './pages/time-sheets/components/aggregated-files/aggregated-files.component';
import { UploadModule } from './pages/upload/upload.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TimeSheetsComponent,
    OriginalFilesComponent,
    AggregatedFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
