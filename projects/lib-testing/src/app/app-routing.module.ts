import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassTestComponent } from './Components/class-test/class-test.component';
import { MediaFileComponent } from './Components/media-file/media-file.component';
const routes: Routes = [
  {
    path: 'media-test',
    component: MediaFileComponent,
  },
  {
    path:'class-test',
    component:ClassTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
