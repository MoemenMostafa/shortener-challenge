import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShortUrlComponent} from './short-url/short-url.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RedirectComponent} from './redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'r/:hash', component: RedirectComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
