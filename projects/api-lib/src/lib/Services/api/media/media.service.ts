import { Injectable } from '@angular/core';
import { JGSApiService } from '../../../api-lib.service';
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private api:JGSApiService) { }

  public uploadFile( formData:FormData, media_type:string, entity_id:string) { 
      let apiRoute: any = {};
      apiRoute.apiroute = `storage/${media_type}/${entity_id}`;
      let fileName = formData.get('file_name');
      console.log("FILE NAME: ",fileName);
      apiRoute.data = formData;
      return this.api.postImages(apiRoute);
  }
}
