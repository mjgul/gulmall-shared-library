import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CacheInterceptor } from './services/interceptor/cache.interceptor';
import { CacheResolverService } from './services/resolver/cache-resolver.service';
import { ErrorInterceptor } from './services/interceptor/error.interceptor';
import { CustomHeaderInterceptor } from './services/interceptor/custom-header.interceptor';
import { ResponseInterceptor } from './services/interceptor/response.interceptor';
import { ApiLibComponent } from './api-lib.component';
import { ProgressComponent } from './components/progress/progress.component';
import { CommonModule } from '@angular/common';  
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({ declarations: [
        ApiLibComponent,
        ProgressComponent,
        LoadingComponent
    ],
    exports: [
        CommonModule,
        ApiLibComponent,
        ProgressComponent,
    ], imports: [CommonModule], providers: [
        CacheResolverService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHeaderInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ResponseInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())
    ] })
export class ApiLibModule { }
