import { Injectable } from '@angular/core';
import { JGSApiService } from '../../../api-lib.service';
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private api:JGSApiService) { }

  public uploadFile( formData:FormData ) { 
      let apiRoute: any = {};
      apiRoute.apiroute = `upload-file`;
      apiRoute.data = formData;
      return this.api.postImages(apiRoute);
  }
}
