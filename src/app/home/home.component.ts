import {Component, Inject, OnInit} from '@angular/core';
import {UrlShortenerService} from '../url-shortener.service';
import {StorageService} from '../storage.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  url: string;
  shortUrl: string;

  constructor(public urlShortener: UrlShortenerService, public storageService: StorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.storeUrl();
  }
  storeUrl() {
    const id = this.storageService.set(this.url);
    this.shortenUrl(id);
  }
  shortenUrl(id) {
    const hash = this.urlShortener.encode(id);
    this.shortUrl = this.storageService.getHost() + 'r/' + hash;
  }

}
