import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CLOUDFLARE_API } from '../../../constants/config';
import { CLOUDFLARE_ACCOUNT_ID } from '../../../constants/config';
@Injectable({ providedIn: 'root'})

export class MediaService {
    protected cloudAPI = CLOUDFLARE_API;
    protected cloudAccount = CLOUDFLARE_ACCOUNT_ID;
  constructor(public http: HttpClient) { }

  uploadImage=async(_file:any,id:string)=>{
    const form = new FormData();
    form.append("file",_file);
    form.append("id", id);
    const route = `https://api.cloudflare.com/client/v4/accounts/${this.cloudAccount}/images/v1`;
    const headers= new HttpHeaders({
'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${this.cloudAPI}`
    });

     return await this.http.post(route,form,{headers});
        
  }

   
}