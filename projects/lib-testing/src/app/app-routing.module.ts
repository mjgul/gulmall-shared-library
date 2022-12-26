import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartTestComponent } from './components/cart-test/cart-test.component';
import { ClassTestComponent } from './components/class-test/class-test.component';
import { MediaFileComponent } from './components/media-file/media-file.component';
import { ApiTestingComponent } from './components/api-testing/api-testing.component';
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
  },
  {
    path:"api-test",
    component:ApiTestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
