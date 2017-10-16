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
  public formatedAddress: string;
  public address: string = 'Caracas';
  public zoom: number = 1;
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onCheckWheather(form: NgForm){
    this.loading = true;
    this.address = form.value.city + ', ' + form.value.country;
    this.zoom = 9;
    this.http.getCoordinates(this.address)
    .subscribe(data => {
      console.log('Coordinates response')
      console.log(data)
      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;
      this.formatedAddress = data.results[0].formatted_address;
      this.http.getWeather(lat, lng, form.value.unit)
      .subscribe(
        (data) => {
        console.log('Weather response')
        console.log(data)
        this.data = data;
        this.searched = true;
        this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
