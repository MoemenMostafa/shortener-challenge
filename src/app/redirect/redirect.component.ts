import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UrlShortenerService} from '../url-shortener.service';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  url: string;

  constructor(public urlShortener: UrlShortenerService, public storageService: StorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const hash = params['hash'];
      const id = this.urlShortener.decode(hash);
      this.url = this.storageService.get(id - 1);
      setTimeout(() => window.location.href = this.url, 2000);
    });

  }

}
