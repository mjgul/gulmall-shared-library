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
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ApiLibModule {
}
ApiLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApiLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, declarations: [ApiLibComponent,
        ProgressComponent], imports: [HttpClientModule,
        HttpClientJsonpModule,
        MatProgressBarModule,
        CommonModule], exports: [CommonModule,
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
        ], CommonModule,
        MatProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ApiLibComponent,
                        ProgressComponent,
                    ],
                    imports: [
                        HttpClientModule,
                        HttpClientJsonpModule,
                        MatProgressBarModule,
                        CommonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvYXBpLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQTJDL0MsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkF2Q3JCLGVBQWU7UUFDZixpQkFBaUIsYUFHakIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsWUFBWSxhQUdaLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG9CQUFvQjswR0EwQlgsWUFBWSxhQXhCYjtRQUNSLG9CQUFvQjtRQUNwQjtZQUNBLE9BQU8sRUFBQyxpQkFBaUI7WUFDekIsUUFBUSxFQUFDLHVCQUF1QjtZQUNoQyxLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0Q7WUFDRSxPQUFPLEVBQUMsaUJBQWlCO1lBQ3pCLFFBQVEsRUFBQyxnQkFBZ0I7WUFDekIsS0FBSyxFQUFDLElBQUk7U0FDWDtRQUNEO1lBQ0UsT0FBTyxFQUFDLGlCQUFpQjtZQUN6QixRQUFRLEVBQUMsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBQyxJQUFJO1NBQ1g7UUFDRDtZQUNFLE9BQU8sRUFBQyxpQkFBaUI7WUFDekIsUUFBUSxFQUFDLG1CQUFtQjtZQUM1QixLQUFLLEVBQUMsSUFBSTtTQUNYO0tBQ0YsWUFsQ1U7WUFDUCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixZQUFZO1NBQ2IsRUFFQyxZQUFZO1FBR1osb0JBQW9COzJGQTBCWCxZQUFZO2tCQXpDeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBQzt3QkFDUixvQkFBb0I7d0JBQ3BCOzRCQUNBLE9BQU8sRUFBQyxpQkFBaUI7NEJBQ3pCLFFBQVEsRUFBQyx1QkFBdUI7NEJBQ2hDLEtBQUssRUFBQyxJQUFJO3lCQUNYO3dCQUNEOzRCQUNFLE9BQU8sRUFBQyxpQkFBaUI7NEJBQ3pCLFFBQVEsRUFBQyxnQkFBZ0I7NEJBQ3pCLEtBQUssRUFBQyxJQUFJO3lCQUNYO3dCQUNEOzRCQUNFLE9BQU8sRUFBQyxpQkFBaUI7NEJBQ3pCLFFBQVEsRUFBQyxnQkFBZ0I7NEJBQ3pCLEtBQUssRUFBQyxJQUFJO3lCQUNYO3dCQUNEOzRCQUNFLE9BQU8sRUFBQyxpQkFBaUI7NEJBQ3pCLFFBQVEsRUFBQyxtQkFBbUI7NEJBQzVCLEtBQUssRUFBQyxJQUFJO3lCQUNYO3FCQUNGO2lCQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudEpzb25wTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWNoZUludGVyY2VwdG9yIH0gZnJvbSAnLi9TZXJ2aWNlcy9JbnRlcmNlcHRvci9jYWNoZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDYWNoZVJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvUmVzb2x2ZXIvY2FjaGUtcmVzb2x2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9TZXJ2aWNlcy9JbnRlcmNlcHRvci9lcnJvci5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDdXN0b21IZWFkZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vU2VydmljZXMvSW50ZXJjZXB0b3IvY3VzdG9tLWhlYWRlci5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi9TZXJ2aWNlcy9JbnRlcmNlcHRvci9yZXNwb25zZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBBcGlMaWJDb21wb25lbnQgfSBmcm9tICcuL2FwaS1saWIuY29tcG9uZW50JztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwaUxpYkNvbXBvbmVudCxcbiAgICBQcm9ncmVzc0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudEpzb25wTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBBcGlMaWJDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NDb21wb25lbnQsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczpbXG4gICAgQ2FjaGVSZXNvbHZlclNlcnZpY2UsXG4gICAge1xuICAgIHByb3ZpZGU6SFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6Q3VzdG9tSGVhZGVySW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6dHJ1ZVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTpIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczpDYWNoZUludGVyY2VwdG9yLFxuICAgIG11bHRpOnRydWVcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6SFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6RXJyb3JJbnRlcmNlcHRvcixcbiAgICBtdWx0aTp0cnVlXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOkhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUNsYXNzOlJlc3BvbnNlSW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6dHJ1ZVxuICB9XG5dXG59KVxuZXhwb3J0IGNsYXNzIEFwaUxpYk1vZHVsZSB7IH1cbiJdfQ==