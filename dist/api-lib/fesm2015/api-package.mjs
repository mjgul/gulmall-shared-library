import * as i0 from '@angular/core';
import { Component, Injectable, NgModule, InjectionToken, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpResponse, HttpEventType, HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { of, tap, EMPTY, BehaviorSubject, retry, map, catchError as catchError$1, throwError, finalize, Observable } from 'rxjs';
import { catchError, startWith, distinctUntilChanged } from 'rxjs/operators';
import * as i3 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { __awaiter } from 'tslib';

class ApiLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApiLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ApiLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ApiLibComponent, selector: "lib-api-lib", ngImport: i0, template: `
    <p>
      api-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ApiLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-api-lib',
                    template: `
    <p>
      api-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CacheResolverService {
    constructor() {
        // we will store HttpResponse in a map with key as unique identifire.
        // this will be acting as a identifire and it will hold the list of responses.
        this.cache = new Map();
    }
    set(key, value, timeToLive = null) {
        console.log('set cache key', key);
        if (timeToLive) {
            const expiresIn = new Date();
            expiresIn.setSeconds(expiresIn.getSeconds() + timeToLive);
            // if we dont have to expire then put null here.
            this.cache.set(key, [expiresIn, value]);
        }
    }
    get(key) {
        const tuple = this.cache.get(key);
        if (!tuple)
            return null;
        // extract tuple.
        const expiresIn = tuple[0];
        const httpSavedResponse = tuple[1];
        const timeNow = new Date();
        if (expiresIn && expiresIn.getTime() < timeNow.getTime()) {
            this.cache.delete(key);
            return null;
        }
        return httpSavedResponse;
    }
}
CacheResolverService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheResolverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CacheResolverService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheResolverService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheResolverService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const TIME_TO_LIVE = 10;
class CacheInterceptor {
    constructor(cacheResolver) {
        this.cacheResolver = cacheResolver;
    }
    intercept(request, next) {
        if (request.method != 'GET') {
            return next.handle(request);
        }
        const cachedResponse = this.cacheResolver.get(request.url);
        return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next);
    }
    sendRequest(request, next) {
        return next.handle(request)
            .pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                this.cacheResolver.set(request.url, event, TIME_TO_LIVE);
            }
        }));
    }
}
CacheInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheInterceptor, deps: [{ token: CacheResolverService }], target: i0.ɵɵFactoryTarget.Injectable });
CacheInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CacheInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: CacheResolverService }]; } });

class ErrorInterceptor {
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

class CustomHeaderInterceptor {
    constructor() { }
    intercept(req, next) {
        const api_key = "jgs";
        const token = "000111";
        const Accept = "*/*";
        const user_id = localStorage.getItem('user_id') || "";
        const reqWithAuth = req.clone({
            setHeaders: {
                api_key,
                Authorization: `${token}`,
                user_id,
                Accept
            }
        });
        return next.handle(req);
    }
}
CustomHeaderInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomHeaderInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomHeaderInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomHeaderInterceptor, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomHeaderInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LoaderService {
    constructor() {
        this.isLoading = new BehaviorSubject(false);
        this.progress = 0;
        this.bufferValue = 0;
        this.isLoading.subscribe(res => {
            console.log("LOADING: ", res);
        });
    }
    /**
     * // TO CHECK IF ANY API GET CALLED OR NOT.
     * @returns Observable of true or false based on api calls.
     */
    getLoadingStatus() {
        return this.isLoading.asObservable();
    }
}
LoaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ResponseInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(request, next) {
        const startTime = new Date().getTime();
        this.loaderService.isLoading.next(true);
        return next.handle(request)
            .pipe(retry(2), map((event) => {
            if (event.type === HttpEventType.UploadProgress) {
                let progress = Math.round(event.loaded / event.total * 100) + '%';
                this.loaderService.progress = Math.round(event.loaded / event.total * 100);
                console.log("PROGRESS: ", progress);
                this.loaderService.isLoading.next(true);
                //console.log('Uploading:' + Math.round(event.loaded/ event.total! *100) + '%');
                if (event.loaded == event.total) {
                    this.loaderService.isLoading.next(false);
                    console.log("Event Loaded", event);
                }
            }
            const endTime = new Date().getTime();
            const difference = endTime - startTime;
            console.log(`${event.type} succeed in ${difference} ms.`);
            return event;
        }), catchError$1((error) => {
            return throwError(() => {
                new Error('Test');
            });
        }), finalize(() => {
            this.loaderService.isLoading.next(false);
        }));
    }
}
ResponseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResponseInterceptor, deps: [{ token: LoaderService }], target: i0.ɵɵFactoryTarget.Injectable });
ResponseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResponseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ResponseInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: LoaderService }]; } });

class ProgressComponent {
    constructor(loader) {
        this.loader = loader;
        this.color = 'primary';
        this.mode = 'buffer';
        this.value = 50;
        this.bufferValue = 75;
        this.loading = false;
    }
    ngOnInit() {
        this.loader.isLoading.subscribe(res => {
            this.loading = res;
            this.value = this.loader.progress;
            this.bufferValue = this.loader.bufferValue;
        });
    }
}
ProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressComponent, deps: [{ token: LoaderService }], target: i0.ɵɵFactoryTarget.Component });
ProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ProgressComponent, selector: "lib-progress", ngImport: i0, template: "\n\n  <div *ngIf=\"loader.isLoading |async\" class=\"progress\">\n    \n    <mat-card class=\"example-card\">\n      <mat-card-subtitle>Uploading...</mat-card-subtitle>\n      <mat-card-content>\n        \n      </mat-card-content>\n   \n      <mat-card-footer>\n        <mat-progress-bar\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"loader.progress\"\n        [bufferValue]=\"loader.bufferValue\">\n    </mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n     \n  </div>", styles: [".example-h2{margin:10px}.example-section{height:60px;background:orange;width:50%;text-align:center;padding-left:10px;padding-right:10px;padding-bottom:10px}mat-card{width:50%;text-align:center;font-size:18px;font-weight:900}mat-card-footer{padding-bottom:4px}.image-upload-component{background:white;width:100%;padding-left:20px;padding-right:20px;padding-bottom:20px}.progress,.progress-active{z-index:1000;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:0;background:#e7e7e7b5;height:100%;width:100%;top:0}\n"], components: [{ type: i2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i2.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i2.MatCardFooter, selector: "mat-card-footer" }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-progress', template: "\n\n  <div *ngIf=\"loader.isLoading |async\" class=\"progress\">\n    \n    <mat-card class=\"example-card\">\n      <mat-card-subtitle>Uploading...</mat-card-subtitle>\n      <mat-card-content>\n        \n      </mat-card-content>\n   \n      <mat-card-footer>\n        <mat-progress-bar\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"loader.progress\"\n        [bufferValue]=\"loader.bufferValue\">\n    </mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n     \n  </div>", styles: [".example-h2{margin:10px}.example-section{height:60px;background:orange;width:50%;text-align:center;padding-left:10px;padding-right:10px;padding-bottom:10px}mat-card{width:50%;text-align:center;font-size:18px;font-weight:900}mat-card-footer{padding-bottom:4px}.image-upload-component{background:white;width:100%;padding-left:20px;padding-right:20px;padding-bottom:20px}.progress,.progress-active{z-index:1000;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:0;background:#e7e7e7b5;height:100%;width:100%;top:0}\n"] }]
        }], ctorParameters: function () { return [{ type: LoaderService }]; } });

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: LoadingComponent, selector: "lib-loading", ngImport: i0, template: "<p>loading works!</p>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loading', template: "<p>loading works!</p>", styles: [""] }]
        }], ctorParameters: function () { return []; } });

class ApiLibModule {
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
                        LoadingComponent
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

const BASICTOKEN = 'eXV6ZWVfY2xpZW50OjI5MDIzNmNmLTgxZDItNDg5MS1hYmNlLWYzZmUzYzA5NWMxMA==';
const SERVER_IP = '20.233.177.178';
//export const SERVER_IP = 'backend-development.digitalmall.app';

class JGSApiService {
    // CONSTRUCTOR API SERVICE
    constructor(http, loader) {
        this.http = http;
        this.loader = loader;
        this.appBaseUrl = `http://${SERVER_IP}`;
        // COMMON GET REQUEST
        this.GET = (route) => __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`${this.appBaseUrl}/${route.apiroute}`);
        });
        // COMMON POST REQUEST
        this.POST = (route) => __awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.appBaseUrl}/${route.apiroute}`, route.data);
        });
        // COMMON PUT REQUEST
        this.PUT = (route) => __awaiter(this, void 0, void 0, function* () {
            return yield this.http.put(`${this.appBaseUrl}/${route.apiroute}`, route.data);
        });
        // COMMON DELETE REQUEST
        this.DELETE = (route) => __awaiter(this, void 0, void 0, function* () {
            return yield this.http.delete(`${this.appBaseUrl}/${route.apiroute}`, route.data);
        });
        this.postImages = (route) => {
            return this.http.post(`${this.appBaseUrl}/${route.apiroute}`, route.data, {
                reportProgress: false,
                observe: 'events',
            });
        };
    }
}
JGSApiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: JGSApiService, deps: [{ token: i1.HttpClient }, { token: LoaderService }], target: i0.ɵɵFactoryTarget.Injectable });
JGSApiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: JGSApiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: JGSApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: LoaderService }]; } });

class MediaService {
    constructor(api) {
        this.api = api;
    }
    uploadFile(formData) {
        let apiRoute = {};
        apiRoute.apiroute = `upload-file`;
        apiRoute.data = formData;
        return this.api.postImages(apiRoute);
    }
}
MediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MediaService, deps: [{ token: JGSApiService }], target: i0.ɵɵFactoryTarget.Injectable });
MediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MediaService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: JGSApiService }]; } });

class MultiLingualName {
    constructor(en, ar) {
        this.en = en;
        this.ar = ar;
    }
}

class Color extends MultiLingualName {
    constructor(name_en, name_ar, colorHex, id) {
        super(name_en, name_ar);
        this.id = id;
        this.colorHex = colorHex;
    }
}

class Size extends MultiLingualName {
    constructor(name_en, name_ar, id) {
        super(name_en, name_ar);
        this.id = id;
    }
}

class Item {
    // Initiating the item attributes.
    constructor(name, description, price) {
        // GET ITEM NAME
        this.getItemName = () => {
            return this.name;
        };
        this.getItemPrice = () => {
            return this.price;
        };
        // Get item Id
        this.getItemId = () => {
            return this.id || "";
        };
        this.setImages = (images) => {
            this.image = images;
            return this.image;
        };
        // GET ITEM DESCRIPTION
        this.getItemDescription = () => {
            return this.description;
        };
        this.getItemImages = () => {
            return this.image || [];
        };
        this.name = name;
        this.description = description;
        this.price = price;
    }
    ;
    // method required to carry out contract with interface Payable
    getPaymentAmount() {
        return this.price; // calculate total cost
    }
    ;
    itemBluePrint() {
        return `${this.getItemName()}_${this.id}`;
    }
}

class Fashion extends Item {
    constructor(name, description, price, availableColors, availableSize) {
        super(name, description, price);
        this.availableColor = availableColors;
        this.availableSize = availableSize;
    }
    getRequiredFields() {
        return { message: "Kinly select size and color", options: [{ name: 'size', list: this.availableSize }, { name: 'color', list: this.availableColor }] };
    }
}

class Cloth extends Fashion {
    constructor(name, description, price, color, size, availableColor, availableSize) {
        super(name, description, price, availableColor, availableSize);
        this.getItemSizeId = () => {
            return this.size.id;
        };
        this.getItemColorId = () => {
            return this.color.id;
        };
        this.color = color;
        this.size = size;
    }
    itemBluePrint() {
        return `${this.getItemName().replace(/\ /g, '-')}_${this.getItemId()}_${this.color}_${this.size}`;
    }
}

class Shoes extends Fashion {
    constructor(name, description, price, color, size, availableColor, availableSize) {
        super(name, description, price, availableColor, availableSize);
        this.getItemSizeId = () => {
            return this.size.id;
        };
        this.getItemColorId = () => {
            return this.color.id;
        };
        this.color = color;
        this.size = size;
    }
    itemBluePrint() {
        return `${this.getItemName().replace(/\ /g, '-')}_${this.getItemId()}_${this.color}_${this.size}`;
    }
}

class ItemDataManiputeService {
    constructor() {
        this.toClass = (items) => {
            let filteredItems = items.filter((item) => item.Price != 0);
            let classifiedItems = [];
            filteredItems.forEach((item) => {
                console.log("ITEM CAT: ", item);
                switch (item.status) {
                    case 'inactive':
                        classifiedItems.push(this.toCloth(item));
                        break;
                    case 'active':
                        classifiedItems.push(this.toShoes(item));
                        break;
                    default:
                        break;
                }
            });
            console.log("ITEM IN DATA MANIPULATION ", classifiedItems);
            return classifiedItems;
        };
        this.toCloth = (item) => {
            let clothAvailableColor = [];
            let clothAvailableSize = [];
            item.available_color.forEach((color) => {
                let dummyColor = new Color(color.name.en, color.name.ar, color.cssHex, color.ID);
                clothAvailableColor.push(dummyColor);
            });
            item.available_color.forEach((x) => {
                let dummyColor = new Size(x.name.en, x.name.ar, x.cssHex);
                clothAvailableSize.push(dummyColor);
            });
            let cloth = new Cloth(item.name.en, item.name.ar, item.price, new Color('', '', '', ''), new Size('', '', ''), clothAvailableColor, clothAvailableSize);
            return cloth;
        };
        this.toShoes = (item) => {
            let clothAvailableColor = [];
            let clothAvailableSize = [];
            item.available_color.forEach((color) => {
                let dummyColor = new Color(color.name.en, color.name.ar, color.cssHex, color.ID);
                clothAvailableColor.push(dummyColor);
            });
            item.available_color.forEach((x) => {
                let dummyColor = new Size(x.name.en, x.name.ar, x.cssHex);
                clothAvailableSize.push(dummyColor);
            });
            let cloth = new Shoes(item.name.en, item.name.ar, item.price, new Color('', '', '', ''), new Size('', '', ''), clothAvailableColor, clothAvailableSize);
            return cloth;
        };
    }
}
ItemDataManiputeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDataManiputeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ItemDataManiputeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDataManiputeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDataManiputeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ItemService {
    constructor(api, http, itemDataManipulation) {
        this.api = api;
        this.http = http;
        this.itemDataManipulation = itemDataManipulation;
        this.appBaseUrl = `http://${SERVER_IP}`;
        /**
         * Used to fetch comments based on entity
         * @Author Muhammad Junaid Gul
         * @returns list of all users.
         * @memberof ItemService
         */
        this.getAllItem = () => __awaiter(this, void 0, void 0, function* () {
            let apiRoute = {};
            apiRoute.apiroute = "get-all-item";
            return yield this.http.get(`${this.appBaseUrl}/${apiRoute.apiroute}`).pipe(map((items) => this.itemDataManipulation.toClass(items.data)));
        });
    }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} status
     * @returns list of users fetched by status.
     * @memberof ItemService
     */
    getAllItemWithStatus(_status) {
        let apiRoute = {};
        apiRoute.apiroute = "get-item-with-status";
        apiRoute.data = { status: _status };
        return this.api.POST(apiRoute);
    }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} mamal_id
     * @returns single user.
     * @memberof ItemService
     */
    getItemById(_id) {
        let apiRoute = {};
        apiRoute.apiroute = "get-item-by-id";
        apiRoute.data = { item_id: _id };
        return this.api.POST(apiRoute);
    }
    updateItemById(_item, _id) { }
    /**
     * Used to fetch comments based on entity
     * @Author Muhammad Junaid Gul
     * @param {string} mamal_id
     * @returns status of deletion.
     * @memberof ItemService
     */
    deleteItemById(_id) {
        let apiRoute = {};
        apiRoute.apiroute = "delete-item-by-id";
        apiRoute.data = { item_id: _id };
        return this.api.POST(apiRoute);
    }
}
ItemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, deps: [{ token: JGSApiService }, { token: i1.HttpClient }, { token: ItemDataManiputeService }], target: i0.ɵɵFactoryTarget.Injectable });
ItemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: JGSApiService }, { type: i1.HttpClient }, { type: ItemDataManiputeService }]; } });

class MamalsService {
    constructor(api) {
        this.api = api;
    }
    getAllUser() {
        let route = {};
        route.apiroute = "get-user";
        return this.api.GET(route);
    }
    addUser() { }
    getUserById() { }
    updateUser() { }
}
MamalsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MamalsService, deps: [{ token: JGSApiService }], target: i0.ɵɵFactoryTarget.Injectable });
MamalsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MamalsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MamalsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: JGSApiService }]; } });

class CartService {
    constructor(api) {
        this.api = api;
        this.getAllCart = () => {
            let apiRoute = {};
            apiRoute.apiroute = `get-all-cart`;
            return this.api.GET(apiRoute);
        };
    }
    // ADD TO CART
    /**
     * @param {Cart}
     */
    addToCart(object) {
        let apiRoute = {};
        apiRoute.apiroute = `add-cart`;
        apiRoute.data = object;
        return this.api.POST(apiRoute);
    }
    // GET RECEIPT USING CART IT
    /**
     * @param cart_id
     */
    getReceiptUsingCartId(cart_id) {
        let apiRoute = {};
        apiRoute.apiroute = `get-cart-with-id`;
        apiRoute.data = { cart_id };
        return this.api.POST(apiRoute);
    }
}
CartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CartService, deps: [{ token: JGSApiService }], target: i0.ɵɵFactoryTarget.Injectable });
CartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CartService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CartService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: JGSApiService }]; } });

const BLOB_STORAGE_TOKEN = new InjectionToken('BLOB_STORAGE_TOKEN');

class StorageService {
    constructor(blobStorage) {
        this.blobStorage = blobStorage;
    }
    uploadToBlobStorage(sasToken, file) {
        const customBlockSize = this.getBlockSize(file);
        const options = { blockSize: customBlockSize };
        const blobService = this.createBlobService(sasToken.storageAccessToken, sasToken.storageUri);
        blobService.singleBlobPutThresholdInBytes = customBlockSize;
        return this.uploadFile(blobService, sasToken, file, options);
    }
    createBlobService(accessToken, blobUri) {
        return this.blobStorage
            .createBlobServiceWithSas(blobUri, accessToken)
            .withFilter(new this.blobStorage.ExponentialRetryPolicyFilter());
    }
    uploadFile(blobService, accessToken, file, options) {
        return new Observable(observer => {
            const speedSummary = blobService.createBlockBlobFromBrowserFile(accessToken.container, accessToken.filename, file, options, error => this.callback(error, observer));
            speedSummary.on('progress', () => this.getProgress(speedSummary, observer));
        }).pipe(startWith(0), distinctUntilChanged());
    }
    getProgress(speedSummary, observer) {
        const progress = parseInt(speedSummary.getCompletePercent(2), 10);
        observer.next(progress === 100 ? 99 : progress);
    }
    callback(error, observer) {
        if (error) {
            observer.error(error);
        }
        else {
            observer.next(100);
            observer.complete();
        }
    }
    getBlockSize(file) {
        const size32Mb = 1024 * 1024 * 32;
        const size4Mb = 1024 * 1024 * 4;
        const size512Kb = 1024 * 512;
        return file.size > size32Mb ? size4Mb : size512Kb;
    }
}
StorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StorageService, deps: [{ token: BLOB_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
StorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StorageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StorageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [BLOB_STORAGE_TOKEN]
                    }] }];
    } });

class Vehicle extends Item {
    constructor(name, description, price) {
        super(name, description, price);
    }
}

class Car extends Vehicle {
    constructor(name, description, price, cylinder) {
        super(name, description, price);
        this.cylinder = cylinder;
    }
    setCylinder(cylinder) {
        this.cylinder = cylinder;
    }
    getCylinder() {
        return this.cylinder;
    }
    getRequiredFields() {
        return "Kinly car";
    }
    itemBluePrint() {
        return `${this.getItemName()}_${this.cylinder}`;
    }
}

class CartItem {
    constructor(item) {
        this.getProduct = () => {
            return this.item;
        };
        this.getQuantity = () => {
            return this.quantity;
        };
        this.decreseQuantity = () => {
            if (this.quantity > 0) {
                this.quantity--;
            }
            console.log(this.quantity);
        };
        this.inceaseQuantity = () => {
            this.quantity += 1;
            console.log(this.quantity);
        };
        this.item = item;
        this.quantity = 1;
    }
}

class ShoppingCart {
    constructor() {
        this.addItem = (item) => {
            let getItemByName = this.cartList.get(item.getProduct().itemBluePrint());
            if (getItemByName) {
                let cartItem = this.cartList.get(item.getProduct().itemBluePrint());
                cartItem === null || cartItem === void 0 ? void 0 : cartItem.inceaseQuantity();
            }
            else {
                this.cartList.set(item.getProduct().itemBluePrint(), item);
            }
        };
        this.removeProduct = (item_blue_print) => {
            this.cartList.delete(item_blue_print);
        };
        this.getQuantity = (item_id) => {
            return 0;
        };
        this.totalPrice = () => {
            let totalCost = 0;
            this.cartList.forEach(item => {
                let eachCost = item.getProduct().getItemPrice() * item.getQuantity();
                totalCost += eachCost;
            });
            return totalCost;
        };
        this.getCartDetails = () => {
            let dummyArray = [];
            this.cartList.forEach((cartItem, key) => {
                if (cartItem.getProduct() instanceof Cloth) {
                    let cloth = cartItem.getProduct();
                    let cart = { item_id: cloth.getItemId(), color_id: cloth.getItemColorId(), size_id: cloth.getItemSizeId(), quantity: cartItem.getQuantity() };
                    dummyArray.push(cart);
                }
                else {
                    let item = cartItem.getProduct();
                    let cart = { item_id: item.getItemId(), quantity: cartItem.getQuantity() };
                    dummyArray.push(cart);
                }
            });
            return dummyArray;
        };
        console.log('cart list initiated');
        this.cartList = new Map();
    }
    getCartList() {
        return this.cartList || null;
    }
}

class Bicycle extends Vehicle {
    constructor(name, description, price) {
        super(name, description, price);
    }
    getRequiredFields() {
        return "Kinly bicycle";
    }
}

class Bike extends Vehicle {
    constructor(name, description, price) {
        super(name, description, price);
    }
    getRequiredFields() {
        return "Kinly bike";
    }
}

class Employee {
    constructor(firstName, lastName, socialSecurityNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    // return first name
    getFirstName() { return this.firstName; }
    // return last name
    getLastName() { return this.lastName; }
    // return social security number
    getSocialSecurityNumber() { return this.socialSecurityNumber; }
    toString() {
        return `security number:${this.getSocialSecurityNumber()},
            "First Name", ${this.getFirstName()},
            "Last Name", ${this.getLastName()}`;
    }
    getPaymentAmount() {
        return this.earnings();
    }
}

class CommissionEmployee extends Employee {
    constructor(firstName, lastName, socialSecurityNumber, grossSales, commissionRate) {
        super(firstName, lastName, socialSecurityNumber);
        // set gross sales amount
        this.setGrossSales = (grossSales) => {
            if (grossSales < 0.0) { // validate
                throw new Error("Gross sales must be >= 0.0");
            }
            this.grossSales = grossSales;
        };
        // return gross sales amount
        this.getGrossSales = () => { return this.grossSales; };
        // set commission rate
        this.setCommissionRate = (commissionRate) => {
            if (commissionRate <= 0.0 || commissionRate >= 1.0) { // validate
                throw new Error("Commission rate must be > 0.0 and < 1.0");
            }
            this.commissionRate = commissionRate;
        };
        // return commission rate
        this.getCommissionRate = () => { return this.commissionRate; };
        if (commissionRate <= 0.0 || commissionRate >= 1.0) { // validate throw new IllegalArgumentException(
            "Commission rate must be > 0.0 and < 1.0";
        }
        if (grossSales < 0.0) { // validate
            throw new Error("Gross sales must be >= 0.0");
        }
        this.grossSales = grossSales;
        this.commissionRate = commissionRate;
    }
    // calculate earnings; override abstract method earnings in Employee
    earnings() {
        return this.getCommissionRate() * this.getGrossSales();
    }
    toString() {
        return `"commission employee", ${super.toString()},
"gross sales", ${this.getGrossSales()},
"commission rate", ${this.getCommissionRate()}`;
    }
}

class BasePlusCommissionEmployee extends CommissionEmployee {
    // constructor
    constructor(firstName, lastName, socialSecurityNumber, grossSales, commissionRate, baseSalary) {
        super(firstName, lastName, socialSecurityNumber, grossSales, commissionRate);
        //
        this.setBaseSalary = (baseSalary) => {
            if (baseSalary < 0.0) {
                // validate baseSalary
                throw new Error("Base salary must be >= 0.0");
            }
            this.baseSalary = baseSalary;
        };
        //return base salary
        this.getBaseSalary = () => {
            return this.baseSalary;
        };
        // calculate earnings; override method earnings in CommissionEmployee
        this.earnings = () => {
            return this.getBaseSalary() + super.earnings();
        };
        if (baseSalary < 0.0) {
            // validate baseSalary
            throw new Error("Base salary must be >= 0.0");
        }
        this.baseSalary = baseSalary;
    }
    // return String representation of BasePlusCommissionEmployee object
    toString() {
        return `"Commission plus based", ${super.toString()},"base salary", ${this.getBaseSalary()}`;
    }
}

class HourlyEmployee extends Employee {
    constructor(firstName, lastName, socialSecurityNumber, wage, hours) {
        super(firstName, lastName, socialSecurityNumber);
        //set wage
        this.setWage = (wage) => {
            if (wage < 0.0) {
                throw new Error('Hourly wage must be >= 0.0');
            }
            this.wage = wage;
        };
        this.getWage = () => {
            return this.wage;
        };
        this.setHours = (hours) => {
            if (hours < 0.0 || hours > 168.0) {
                // validate hours
                throw new Error('Hours worked must be >= 0.0 and <= 168.0');
            }
            this.hours = hours;
        };
        //return hours worked
        this.getHours = () => {
            return this.hours;
        };
        this.earnings = () => {
            if (this.getHours() <= 40) {
                // no overtime
                return this.getWage() * this.getHours();
            }
            else {
                return (40 * this.getWage() + (this.getHours() - 40) * this.getWage() * 1.5);
            }
        };
        this.toString = () => {
            return `hourly employee:${super.toString()}, hourly wage ${this.getWage()}, "hours worked", ${this.getHours()}`;
        };
        if (wage < 0.0) {
            // validate wage
            throw new Error('Hourly wage must be >= 0.0');
        }
        if (hours < 0.0 || hours > 168.0) {
            // validate hours
            throw new Error('Hours worked must be >= 0.0 and <= 168.0');
        }
        this.wage = wage;
        this.hours = hours;
    }
}

class SalariedEmployee extends Employee {
    constructor(firstName, lastName, socialSecurityNumber, weeklySalary) {
        super(firstName, lastName, socialSecurityNumber);
        this.earnings = () => { return this.getWeeklySalary(); };
        this.toString = () => {
            return `salaried employee:  ${super.toString()}, weekly salary ${this.getWeeklySalary()}`;
        };
        if (weeklySalary < 0.0) {
            throw new Error("Weekly salary must be >= 0.0");
        }
        this.weeklySalary = weeklySalary;
    }
    // return salary.
    setWeeklySalary(weeklySalary) {
        if (weeklySalary < 0.0) {
            throw new Error("weekly salary must be >= 0.0");
        }
        this.weeklySalary = weeklySalary;
    }
    ;
    getWeeklySalary() { return this.weeklySalary; }
    ;
}

class Invoice {
    constructor(partNumber, partDescription, quantity, pricePerItem) {
        if (quantity < 0) {
            // validate quantity
            throw new Error('Quantity must be >= 0');
        }
        if (pricePerItem < 0.0) {
            // validate pricePerItem
            throw new Error(('Price per item must be >= 0'));
        }
        this.quantity = quantity;
        this.partNumber = partNumber;
        this.partDescription = partDescription;
        this.pricePerItem = pricePerItem;
    }
    //
    getPartNumber() {
        return this.partNumber;
    }
    // get description
    getPartDescription() {
        return this.partDescription;
    }
    // get quantity
    getQuantity() {
        return this.quantity;
    }
    // get price per item
    getPricePerItem() {
        return this.pricePerItem;
    }
    // return String representation of Invoice object
    toString() {
        return `
    "invoice", "part number", ${this.getPartNumber()}, ${this.getPartDescription()},
    "quantity", ${this.getQuantity()}, "price per item", ${this.getPricePerItem()}`;
    }
    getPaymentAmount() {
        return this.getQuantity() * this.getPricePerItem();
    }
}

class Truck extends Vehicle {
    constructor(name, description, price) {
        super(name, description, price);
    }
    getRequiredFields() {
        return "Kinly truck";
    }
}

/*
 * Public API Surface of api-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApiLibComponent, ApiLibModule, BLOB_STORAGE_TOKEN, BasePlusCommissionEmployee, Bicycle, Bike, Car, CartItem, CartService, Cloth, Color, CommissionEmployee, Employee, HourlyEmployee, Invoice, Item, ItemService, MamalsService, MediaService, MultiLingualName, ProgressComponent, SalariedEmployee, ShoppingCart, Size, StorageService, Truck };
//# sourceMappingURL=api-package.mjs.map
