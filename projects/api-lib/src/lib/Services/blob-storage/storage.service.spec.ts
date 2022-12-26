import { TestBed } from '@angular/core/testing';
import { BLOB_STORAGE_TOKEN } from './azure-storage';
import { blobStorageStub, uploadProgressStub } from './blob-storage-stub';
import { StorageService } from './storage.service';

describe('BlobStorageService', () => {
  let blobStorageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        {
          provide: BLOB_STORAGE_TOKEN,
          useValue: blobStorageStub
        }
      ]
    });
  });

  beforeEach(() => {
    blobStorageService = TestBed.get(StorageService);
  });

  describe('Upload File', () => {
    it('should upload file and report progress', (done: DoneFn) => {
      const uploadProgress = blobStorageService.uploadToBlobStorage(
        {
          container: '',
          filename: '',
          storageAccessToken: '',
          storageUri: ''
        },
        <File>{
          name: 'myAssetFileName',
          size: 1024 * 1024 * 33
        }
      );

      uploadProgress.subscribe(progress => {
        expect(progress).toBe(uploadProgressStub);
        if (progress === 100) {
          done();
        }
      });
    });

    it('should catch error', (done: DoneFn) => {
      const uploadProgress = blobStorageService.uploadToBlobStorage(
        {
          container: 'throwError',
          filename: '',
          storageAccessToken: '',
          storageUri: ''
        },
        <File>{
          name: 'myAssetFileName'
        }
      );

      uploadProgress.subscribe(
        progress => {},
        error => {
          expect(error).toBe('throwError');
          done();
        }
      );
    });
  });
});