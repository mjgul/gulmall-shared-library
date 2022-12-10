import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartTestComponent } from './Components/cart-test/cart-test.component';
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
  },
  {
    path:"cart-test",
    component:CartTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
