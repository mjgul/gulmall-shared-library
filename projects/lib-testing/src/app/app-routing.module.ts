import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaFileComponent } from './Components/media-file/media-file.component';
const routes: Routes = [
  {
    path: 'media-test',
    component: MediaFileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
