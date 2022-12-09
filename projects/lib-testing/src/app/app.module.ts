import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaFileComponent } from './Components/media-file/media-file.component';
import { ApiLibModule } from 'api-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import { ClassTestComponent } from './Components/class-test/class-test.component';
@NgModule({
  declarations: [
    AppComponent,
    MediaFileComponent,
    ClassTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ApiLibModule,
    BrowserAnimationsModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
