import { TestBed, inject } from '@angular/core/testing';

import { UrlShortenerService } from './url-shortener.service';

describe('UrlShortenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlShortenerService]
    });
  });

  it('should be created', inject([UrlShortenerService], (service: UrlShortenerService) => {
    expect(service).toBeTruthy();
  }));

  const x = Math.floor((Math.random() * 10000) + 1);
  let s;
  it('should encode id x to string s', inject([UrlShortenerService], (service: UrlShortenerService) => {
    s = service.encode(x);
    expect(service.encode(x)).toEqual(s);
  }));

  it('should decode string s to id x', inject([UrlShortenerService], (service: UrlShortenerService) => {
    expect(service.decode(s)).toEqual(x);
  }));


});
