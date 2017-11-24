import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { UrlShortenerService } from './url-shortener.service';
import { ShortUrlComponent } from './short-url/short-url.component';
import { HomeComponent } from './home/home.component';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ShortUrlComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UrlShortenerService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
