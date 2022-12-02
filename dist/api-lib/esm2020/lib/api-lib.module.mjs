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
import { LoadingComponent } from './Components/loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './item/item.component';
import * as i0 from "@angular/core";
export class ApiLibModule {
}
ApiLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApiLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, declarations: [ApiLibComponent,
        ProgressComponent,
        LoadingComponent,
        ItemComponent], imports: [HttpClientModule,
        HttpClientJsonpModule,
        MatProgressBarModule,
        CommonModule,
        MatCardModule,
        MatIconModule], exports: [CommonModule,
        ApiLibComponent,
        ProgressComponent,
        MatProgressBarModule] });
ApiLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, providers: [
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
        }
    ], imports: [[
            HttpClientModule,
            HttpClientJsonpModule,
            MatProgressBarModule,
            CommonModule,
            MatCardModule,
            MatIconModule
        ], CommonModule,
        MatProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ApiLibComponent,
                        ProgressComponent,
                        LoadingComponent,
                        ItemComponent,
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
                    providers: [
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
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvYXBpLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQThDdEQsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkEzQ3JCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWEsYUFHYixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWEsYUFHYixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixvQkFBb0I7MEdBMEJYLFlBQVksYUF4QmI7UUFDUixvQkFBb0I7UUFDcEI7WUFDQSxPQUFPLEVBQUMsaUJBQWlCO1lBQ3pCLFFBQVEsRUFBQyx1QkFBdUI7WUFDaEMsS0FBSyxFQUFDLElBQUk7U0FDWDtRQUNEO1lBQ0UsT0FBTyxFQUFDLGlCQUFpQjtZQUN6QixRQUFRLEVBQUMsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBQyxJQUFJO1NBQ1g7UUFDRDtZQUNFLE9BQU8sRUFBQyxpQkFBaUI7WUFDekIsUUFBUSxFQUFDLGdCQUFnQjtZQUN6QixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0Q7WUFDRSxPQUFPLEVBQUMsaUJBQWlCO1lBQ3pCLFFBQVEsRUFBQyxtQkFBbUI7WUFDNUIsS0FBSyxFQUFDLElBQUk7U0FDWDtLQUNGLFlBcENVO1lBQ1AsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLGFBQWE7WUFDYixhQUFhO1NBQ2QsRUFFQyxZQUFZO1FBR1osb0JBQW9COzJGQTBCWCxZQUFZO2tCQTdDeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNSLG9CQUFvQjt3QkFDcEI7NEJBQ0EsT0FBTyxFQUFDLGlCQUFpQjs0QkFDekIsUUFBUSxFQUFDLHVCQUF1Qjs0QkFDaEMsS0FBSyxFQUFDLElBQUk7eUJBQ1g7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFDLGlCQUFpQjs0QkFDekIsUUFBUSxFQUFDLGdCQUFnQjs0QkFDekIsS0FBSyxFQUFDLElBQUk7eUJBQ1g7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFDLGlCQUFpQjs0QkFDekIsUUFBUSxFQUFDLGdCQUFnQjs0QkFDekIsS0FBSyxFQUFDLElBQUk7eUJBQ1g7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFDLGlCQUFpQjs0QkFDekIsUUFBUSxFQUFDLG1CQUFtQjs0QkFDNUIsS0FBSyxFQUFDLElBQUk7eUJBQ1g7cUJBQ0Y7aUJBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50SnNvbnBNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhY2hlSW50ZXJjZXB0b3IgfSBmcm9tICcuL1NlcnZpY2VzL0ludGVyY2VwdG9yL2NhY2hlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENhY2hlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9SZXNvbHZlci9jYWNoZS1yZXNvbHZlci5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL1NlcnZpY2VzL0ludGVyY2VwdG9yL2Vycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEN1c3RvbUhlYWRlckludGVyY2VwdG9yIH0gZnJvbSAnLi9TZXJ2aWNlcy9JbnRlcmNlcHRvci9jdXN0b20taGVhZGVyLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL1NlcnZpY2VzL0ludGVyY2VwdG9yL3Jlc3BvbnNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEFwaUxpYkNvbXBvbmVudCB9IGZyb20gJy4vYXBpLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW0uY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwaUxpYkNvbXBvbmVudCxcbiAgICBQcm9ncmVzc0NvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEh0dHBDbGllbnRKc29ucE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQXBpTGliQ29tcG9uZW50LFxuICAgIFByb2dyZXNzQ29tcG9uZW50LFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6W1xuICAgIENhY2hlUmVzb2x2ZXJTZXJ2aWNlLFxuICAgIHtcbiAgICBwcm92aWRlOkhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUNsYXNzOkN1c3RvbUhlYWRlckludGVyY2VwdG9yLFxuICAgIG11bHRpOnRydWVcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6SFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6Q2FjaGVJbnRlcmNlcHRvcixcbiAgICBtdWx0aTp0cnVlXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOkhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUNsYXNzOkVycm9ySW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6dHJ1ZVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTpIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczpSZXNwb25zZUludGVyY2VwdG9yLFxuICAgIG11bHRpOnRydWVcbiAgfVxuXVxufSlcbmV4cG9ydCBjbGFzcyBBcGlMaWJNb2R1bGUgeyB9XG4iXX0=