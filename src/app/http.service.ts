import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class HttpService {
	private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
	private weatherKey = '174de78de65110fe07cf4bdcc75cb699';
	private url: string = '';

  private clockUrl = 'https://maps.googleapis.com/maps/api/timezone/json?location=';
  private clockKey = 'AIzaSyAVdZNmru4Nh3sNNjEbETFzjobnnNSW8Pk';



  constructor(private http: Http) { }


  getWeather(city: string, country: string, unit: string){
  	this.url = this.weatherUrl + '?q=' + city + ',' 
  		+ country + '&APPID=' + this.weatherKey + '&units=' 
  		+ unit;
  	return this.http.get(this.url)
  	.map((respuesta: Response) => respuesta.json());
  }

  getTime(lon: string, lat: string){
    this.url = this.clockUrl + lat + ',' + lon + '&timestamp=1458000000';
    console.log(this.url);
    return this.http.get(this.url)
    .map((respuesta: Response) => respuesta.json());
  }


}
