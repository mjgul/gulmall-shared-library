import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from '../../Services/loader.service';
import {ProgressBarMode} from '@angular/material/progress-bar';
@Component({
  selector: 'lib-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'buffer';
  value = 50;
  bufferValue = 75;
  loading:boolean = false;
  constructor(public loader:LoaderService) { }

  ngOnInit(): void {
    this.loader.isLoading.subscribe(res=>{
      this.loading = res;
      this.value = this.loader.progress;
      this.bufferValue = this.loader.bufferValue;
    })
  }

}
