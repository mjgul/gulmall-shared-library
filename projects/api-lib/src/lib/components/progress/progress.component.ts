import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'lib-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  
  
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
