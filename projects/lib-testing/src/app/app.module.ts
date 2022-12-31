import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaFileComponent } from './components/media-file/media-file.component';
import { ApiLibModule } from 'api-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import { ClassTestComponent } from './components/class-test/class-test.component';
import { CartTestComponent } from './components/cart-test/cart-test.component';
import { BLOB_STORAGE_TOKEN, IAzureStorage } from 'api-lib';
import { StorageService } from 'api-lib';
import { ApiTestingComponent } from './components/api-testing/api-testing.component';
@NgModule({
  declarations: [
    AppComponent,
    MediaFileComponent,
    ClassTestComponent,
    CartTestComponent,
    ApiTestingComponent
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
