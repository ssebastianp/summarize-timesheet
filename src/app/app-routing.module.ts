import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { UploadComponent } from './pages/upload/upload.component';
import { TimeSheetsComponent } from './pages/time-sheets/time-sheets.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'time-sheets', component: TimeSheetsComponent },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
