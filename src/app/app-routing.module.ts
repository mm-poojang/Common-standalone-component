import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./app.component').then((c) => c.AppComponent)
  },
  {
    path: 'progress-bar',
    loadComponent: () =>
      import('./multivalue-progress-bar/multivalue.component').then((c) => c.MultiValueProgressBar)
  },
  {
    path: 'file-upload',
    loadComponent: () =>
      import('./file-upload/file-upoad.component').then((c) => c.FileUploadComponent)
  },
  {
    path: 'hashtag-chip',
    loadComponent: () =>
      import('./hashtag-chip/hashtag.component').then((c) => c.HashTagChipComponent)
  },
  {
    path: 'download-pdf',
    loadComponent: () =>
      import('./download-pdf/download-pdf.component').then((c) => c.DownloadComponent)
  },
  {
    path: 'file-upload-demo',
    loadComponent: () =>
      import('./file-upload-demo/file-upoad-demo.component').then((c) => c.FileUploadDemoComponent)
  },
  {
    path: 'calendar-view',
    loadComponent: () =>
      import('./date-time-picker/calendar.component').then((c) => c.CalendarComponent)
  },
  {
    path: 'common-card',
    loadComponent: () =>
      import('./common-card/common-card.component').then((c) => c.PostFormComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
