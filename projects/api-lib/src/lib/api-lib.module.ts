import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CacheInterceptor } from './Services/Interceptor/cache.interceptor';
import { CacheResolverService } from './Services/Resolver/cache-resolver.service';
import { ErrorInterceptor } from './Services/Interceptor/error.interceptor';
import { CustomHeaderInterceptor } from './Services/Interceptor/custom-header.interceptor';
import { ResponseInterceptor } from './Services/Interceptor/response.interceptor';
import { ApiLibComponent } from './api-lib.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressComponent } from './Components/progress/progress.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './Components/loading/loading.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ApiLibComponent,
    ProgressComponent,
    LoadingComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    MatProgressBarModule,
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    ApiLibComponent,
    ProgressComponent,
    MatProgressBarModule,
  ],
  providers:[
    CacheResolverService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:CustomHeaderInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:CacheInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ResponseInterceptor,
    multi:true
  }
]
})
export class ApiLibModule { }
