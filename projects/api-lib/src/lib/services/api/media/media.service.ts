import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEDIA_IP } from '../../../constants/config'
@Injectable({ providedIn: 'root'})

export class MediaService {
    
  constructor(public http: HttpClient) { }

  uploadImage=async(_file:any,id:string)=>{
  const url = `${MEDIA_IP}/upload`
  const form = new FormData();
  form.append("file",_file);
  form.append("id",id);
  return await this.http.post(url,form);
  }

   
}