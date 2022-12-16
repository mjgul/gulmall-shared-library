import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from '../../services/loader.service';
import { ProgressBarMode } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
export declare class ProgressComponent implements OnInit {
    loader: LoaderService;
    color: ThemePalette;
    mode: ProgressBarMode;
    value: number;
    bufferValue: number;
    loading: boolean;
    constructor(loader: LoaderService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "lib-progress", never, {}, {}, never, never>;
}
