import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  let length;
  const url = 'https://google.com';
  it('should store value to localstore', inject([StorageService], (service: StorageService) => {
    expect(length = service.set(url)).toEqual(length);
  }));

  it('should be retrieve value from localstore', inject([StorageService], (service: StorageService) => {
    expect(service.get(length - 1)).toEqual(url);
  }));
});
