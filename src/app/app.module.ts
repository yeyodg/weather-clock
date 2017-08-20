import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { HttpService } from './http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ClockComponent } from './clock/clock.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent,
    GalleryComponent,
    HomepageComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }