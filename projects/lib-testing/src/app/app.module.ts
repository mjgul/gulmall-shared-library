import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaFileComponent } from './Components/media-file/media-file.component';
import { ApiLibModule } from 'api-lib';
@NgModule({
  declarations: [
    AppComponent,
    MediaFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ApiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
