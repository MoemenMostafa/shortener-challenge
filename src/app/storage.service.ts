import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  key = 'store';
  store: Array<string>;

  constructor() {
    if (localStorage.getItem(this.key)) {
      this.store = JSON.parse(localStorage.getItem(this.key));
    }else {
      this.store = [];
    }

  }

  set(url: string) {
    this.store.push(url);
    localStorage.setItem(this.key, JSON.stringify(this.store));
    return this.store.length;
  }
  get(id) {
    return this.store[id];
  }

  getHost() {
    return document.location.protocol + '//' + document.location.hostname + ':' + document.location.port + '/';
  }
}
