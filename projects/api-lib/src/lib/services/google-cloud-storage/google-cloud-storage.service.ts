import { Injectable } from '@angular/core';
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
@Injectable({
    providedIn: 'root'
  })

  export class GoogleCloueStorageService {
    constructor(){}

        createBucket= async(bucketName:string) => {
        // Creates the new bucket
        await storage.createBucket(bucketName);
        console.log(`Bucket ${bucketName} created.`);
      }

      uploadMedia = async (bucketName:string,path:string) => {
        const file = storage.bucket(bucketName).file('my-file');
        const metadata = {
            contentType: 'application/x-font-ttf',
            metadata: {
              my: 'custom',
              properties: 'go here'
            }
          };
        await storage.bucket(bucketName).upload(path, metadata);
      }

      
  }