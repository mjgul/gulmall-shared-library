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
    const file:File = event.target.files[0];
  
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("mediaList", file);
        this.mediaService.uploadFile(formData,'post-images',"634698ff78913a3f2e74e91c");
        /*
        const upload$ = this.http.post("/api/thumbnail-upload", formData, {
            reportProgress: true,
            observe: 'events'
        })
        .pipe(
            finalize(() => this.reset())
        );
      
        this.uploadSub = upload$.subscribe(event => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
          }
        })*/
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
