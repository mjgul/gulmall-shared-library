import { MediaService } from 'api-lib';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'test-media-file',
  templateUrl: './media-file.component.html',
  styleUrls: ['./media-file.component.css']
})
export class MediaFileComponent implements OnInit {
  fileName = '';
  @Input()
  requiredFileType = null;
  uploadProgress:any = null;
  uploadSub: any = new Subscription;


  constructor(private mediaService:MediaService) {}

  ngOnInit(): void {
  }

  onFileSelected(event:any) {
    
    const file = event.target.files;
 
    if (file) {
        this.fileName = file.name;
        
        const formData: FormData = new FormData();
    for (let i = 0; i < file.length; i++) {
      console.log("FIle name: ", file[i].name);
      formData.append('file', file[i], file[i].name);
    }
        formData.append("mamal_id","0101");
        formData.append("entity_type", "gul");
        formData.append("entity_sub_type", "satti");
        this.mediaService.uploadFile(formData)
        .subscribe(res=>{
          if(res.type === 4){
            console.log("File Upload response: ", res.body);
          }
        })
    }
}

cancelUpload() {
  this.uploadSub.unsubscribe();
  this.reset();
}

reset() {
  this.uploadProgress = null;
  this.uploadSub = null;
}

}
