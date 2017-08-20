import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { HttpService } from '../http.service';

@Component({
  selector: 'we-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit {
  searched: boolean = false;
  data: any = {
    "name": "Caracas",
    "main": {"temp": "12"},
    "weather": [{"main": "Clouds" }]
  };
  country: string = "VE";
  unit: string = "metric";
  city: string = "caracas";
  constructor(private http: HttpService) { }

  ngOnInit() {
  	console.log(this.data.name);
    console.log(this.data.main.temp);
    console.log(this.data.weather[0].main);
  }

  onCheckWheather(form: NgForm){
  	// this.http.getWeather(form.value.city.toLowerCase(), form.value.country, form.value.unit)
   //  .subscribe((data) => {
   //    this.data = data; 
   //    this.searched = !this.searched;
   //    console.log(this.data);

   //  });
   
  }


}
