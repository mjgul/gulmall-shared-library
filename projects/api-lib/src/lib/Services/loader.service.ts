import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public progress:number = 0;
  public bufferValue:number = 0;
  
  constructor() { 

    this.isLoading.subscribe(res=>{
      console.log("LOADING: ", res);
    })
  }
  
  /**
   * // TO CHECK IF ANY API GET CALLED OR NOT.
   * @returns Observable of true or false based on api calls.
   */
  getLoadingStatus(){
    return this.isLoading.asObservable();
  }

}
