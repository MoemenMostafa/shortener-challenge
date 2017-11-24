import { Injectable } from '@angular/core';

@Injectable()
/**
 * encode() takes an ID and turns it into a short string
 * decode() takes a short string and turns it into an ID
 */

export class UrlShortenerService {
  alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_';
  base: number = this.alphabet.length;
  constructor() { }
    encode(id) {
      let str = '';
      while (id > 0) {
        str = this.alphabet.charAt(id % this.base) + str;
        id = Math.floor(id / this.base);
      }
      return str;
    }
    decode(str) {
      let id = 0;
      for (let i = 0; i < str.length; i++) {
        id = id * this.base + this.alphabet.indexOf(str.charAt(i));
      }
      return id;
    }
}
