import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class HttpService {
	private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
	private weatherKey = '174de78de65110fe07cf4bdcc75cb699';
	private url: string = '';
  constructor(private http: Http) { }


  getWeather(city: string, country: string, unit: string){
  	this.url = this.weatherUrl + '?q=' + city + ',' 
  		+ country + '&APPID=' + this.weatherKey + '&units=' 
  		+ unit;
  	console.log(this.url);
  	return this.http.get(this.url)
  	.map((respuesta: Response) => respuesta.json());
  }
}
