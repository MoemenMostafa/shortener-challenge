import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  key = 'store';
  store: Array<any>;

  constructor() {
    this.store = JSON.parse(localStorage.getItem(this.key));
  }

  set(url: string) {
    this.store.push(url);
    localStorage.setItem(this.key, JSON.stringify(this.store));
  }
  get() {
    return localStorage.getItem(this.key);
  }
}
