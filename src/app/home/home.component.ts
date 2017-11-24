import { Component, OnInit } from '@angular/core';
import {UrlShortenerService} from '../url-shortener.service';
import {StorageService} from "../storage.service";
// import { Warehouse } from 'ngx-warehouse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  url: string;

  constructor(public urlShortener: UrlShortenerService, public storageService: StorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.storeUrl();
  }
  storeUrl() {
    this.storageService.set(this.url);
    // this.warehouse.count().subscribe(
    //   (value) => console.log(value)
    // );
  }
  // shortenUrl(){
  //   // this.urlShortener.encode()
  // }

}
