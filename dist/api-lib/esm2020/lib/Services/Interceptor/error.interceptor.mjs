import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe(catchError((error) => {
            if (error.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
            }
            // If you want to return a new response:
            // return of(new HttpResponse({body: [{name: "Default value..."}]}));
            // If you want to return the error on the upper level:
            // return throwError(error);
            // or just return nothing:
            return EMPTY;
        }));
    }
}
ErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ErrorInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcGktbGliL3NyYy9saWIvU2VydmljZXMvSW50ZXJjZXB0b3IvZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEzQyxPQUFPLEVBQWMsS0FBSyxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzVDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsZ0JBQWUsQ0FBQztJQUVoQixTQUFTLENBQUMsT0FBNkIsRUFBRSxJQUFpQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFVLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDdEMsSUFBSSxLQUFLLENBQUMsS0FBSyxZQUFZLEtBQUssRUFBRTtnQkFDaEMsa0VBQWtFO2dCQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsc0RBQXNEO2dCQUN0RCw2REFBNkQ7Z0JBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEtBQUssQ0FBQyxNQUFNLGVBQWUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDbEY7WUFDRCx3Q0FBd0M7WUFDeEMscUVBQXFFO1lBQ3JFLHNEQUFzRDtZQUN0RCw0QkFBNEI7WUFDNUIsMEJBQTBCO1lBRTFCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OzZHQXhCVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRU1QVFksIHRocm93RXJyb3IsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj4ge1xuICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBib2R5IHdhczogJHtlcnJvci5lcnJvcn1gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB5b3Ugd2FudCB0byByZXR1cm4gYSBuZXcgcmVzcG9uc2U6XG4gICAgICAgIC8vIHJldHVybiBvZihuZXcgSHR0cFJlc3BvbnNlKHtib2R5OiBbe25hbWU6IFwiRGVmYXVsdCB2YWx1ZS4uLlwifV19KSk7XG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIHJldHVybiB0aGUgZXJyb3Igb24gdGhlIHVwcGVyIGxldmVsOlxuICAgICAgICAvLyByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgIC8vIG9yIGp1c3QgcmV0dXJuIG5vdGhpbmc6XG5cbiAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=