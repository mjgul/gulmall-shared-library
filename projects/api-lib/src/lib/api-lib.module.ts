import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CacheInterceptor } from './services/interceptor/cache.interceptor';
import { CacheResolverService } from './services/resolver/cache-resolver.service';
import { ErrorInterceptor } from './services/interceptor/error.interceptor';
import { CustomHeaderInterceptor } from './services/interceptor/custom-header.interceptor';
import { ResponseInterceptor } from './services/interceptor/response.interceptor';
import { ApiLibComponent } from './api-lib.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressComponent } from './components/progress/progress.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';  
import { LoadingComponent } from './components/loading/loading.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ApiLibComponent,
    ProgressComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    MatProgressBarModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
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
