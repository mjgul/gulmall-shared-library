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
import * as i0 from "@angular/core";
export class ApiLibModule {
}
ApiLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApiLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, declarations: [ApiLibComponent,
        ProgressComponent,
        LoadingComponent], imports: [HttpClientModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvYXBpLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBNkN2RCxNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQTFDckIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0IsYUFHaEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhLGFBR2IsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsb0JBQW9COzBHQTBCWCxZQUFZLGFBeEJiO1FBQ1Isb0JBQW9CO1FBQ3BCO1lBQ0EsT0FBTyxFQUFDLGlCQUFpQjtZQUN6QixRQUFRLEVBQUMsdUJBQXVCO1lBQ2hDLEtBQUssRUFBQyxJQUFJO1NBQ1g7UUFDRDtZQUNFLE9BQU8sRUFBQyxpQkFBaUI7WUFDekIsUUFBUSxFQUFDLGdCQUFnQjtZQUN6QixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0Q7WUFDRSxPQUFPLEVBQUMsaUJBQWlCO1lBQ3pCLFFBQVEsRUFBQyxnQkFBZ0I7WUFDekIsS0FBSyxFQUFDLElBQUk7U0FDWDtRQUNEO1lBQ0UsT0FBTyxFQUFDLGlCQUFpQjtZQUN6QixRQUFRLEVBQUMsbUJBQW1CO1lBQzVCLEtBQUssRUFBQyxJQUFJO1NBQ1g7S0FDRixZQXBDVTtZQUNQLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtTQUNkLEVBRUMsWUFBWTtRQUdaLG9CQUFvQjsyRkEwQlgsWUFBWTtrQkE1Q3hCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ1Isb0JBQW9CO3dCQUNwQjs0QkFDQSxPQUFPLEVBQUMsaUJBQWlCOzRCQUN6QixRQUFRLEVBQUMsdUJBQXVCOzRCQUNoQyxLQUFLLEVBQUMsSUFBSTt5QkFDWDt3QkFDRDs0QkFDRSxPQUFPLEVBQUMsaUJBQWlCOzRCQUN6QixRQUFRLEVBQUMsZ0JBQWdCOzRCQUN6QixLQUFLLEVBQUMsSUFBSTt5QkFDWDt3QkFDRDs0QkFDRSxPQUFPLEVBQUMsaUJBQWlCOzRCQUN6QixRQUFRLEVBQUMsZ0JBQWdCOzRCQUN6QixLQUFLLEVBQUMsSUFBSTt5QkFDWDt3QkFDRDs0QkFDRSxPQUFPLEVBQUMsaUJBQWlCOzRCQUN6QixRQUFRLEVBQUMsbUJBQW1COzRCQUM1QixLQUFLLEVBQUMsSUFBSTt5QkFDWDtxQkFDRjtpQkFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRKc29ucE1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FjaGVJbnRlcmNlcHRvciB9IGZyb20gJy4vU2VydmljZXMvSW50ZXJjZXB0b3IvY2FjaGUuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2FjaGVSZXNvbHZlclNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL1Jlc29sdmVyL2NhY2hlLXJlc29sdmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vU2VydmljZXMvSW50ZXJjZXB0b3IvZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ3VzdG9tSGVhZGVySW50ZXJjZXB0b3IgfSBmcm9tICcuL1NlcnZpY2VzL0ludGVyY2VwdG9yL2N1c3RvbS1oZWFkZXIuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4vU2VydmljZXMvSW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQXBpTGliQ29tcG9uZW50IH0gZnJvbSAnLi9hcGktbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwaUxpYkNvbXBvbmVudCxcbiAgICBQcm9ncmVzc0NvbXBvbmVudCxcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50SnNvbnBNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEFwaUxpYkNvbXBvbmVudCxcbiAgICBQcm9ncmVzc0NvbXBvbmVudCxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOltcbiAgICBDYWNoZVJlc29sdmVyU2VydmljZSxcbiAgICB7XG4gICAgcHJvdmlkZTpIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczpDdXN0b21IZWFkZXJJbnRlcmNlcHRvcixcbiAgICBtdWx0aTp0cnVlXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOkhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUNsYXNzOkNhY2hlSW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6dHJ1ZVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTpIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczpFcnJvckludGVyY2VwdG9yLFxuICAgIG11bHRpOnRydWVcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6SFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6UmVzcG9uc2VJbnRlcmNlcHRvcixcbiAgICBtdWx0aTp0cnVlXG4gIH1cbl1cbn0pXG5leHBvcnQgY2xhc3MgQXBpTGliTW9kdWxlIHsgfVxuIl19