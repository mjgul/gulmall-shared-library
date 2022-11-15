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
      formData.append('mediaList', file[i], file[i].name);
    }
        formData.append("entity_id","634698ff78913a3f2e74e91c");
        formData.append("entity_type", "post-images");
     
        this.mediaService.uploadFile(formData,'post-images',"634698ff78913a3f2e74e91c")
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
