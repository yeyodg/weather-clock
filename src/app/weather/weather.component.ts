import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { HttpService } from '../http.service';

@Component({
  selector: 'we-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit {
  public searched: boolean = false;
  public loading = false;
  public data: any;
  public mapUrl: string = 'https://www.google.com/maps/embed/v1/search?q=caracas&key=AIzaSyAcGtrSFPk3Mrng_37QhAS2qBPwpQDsU6s';
  public imageUrl: string = 'http://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg';
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onCheckWheather(form: NgForm){
    this.loading = true;
  	this.http.getWeather(form.value.city.toLowerCase(), form.value.country, form.value.unit)
    .subscribe(
      (data) => {
      this.data = data;
      this.searched = true;
      this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );

  }


}
