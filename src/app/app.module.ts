import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { HttpService } from './http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LoadingModule } from 'ngx-loading';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ClockComponent } from './clock/clock.component';
import { GalleryComponent, NgbdModalContent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LightboxModule } from 'angular2-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent,
    GalleryComponent,
    HomepageComponent,
    NgbdModalContent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    LoadingModule,
    LightboxModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent]
})
export class AppModule { }