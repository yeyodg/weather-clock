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
