import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class HttpService {
	private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';
	private weatherKey = '174de78de65110fe07cf4bdcc75cb699';

	private geocodingKey = 'AIzaSyDUHwMidRKfDwuAGB7DdXAjrztWhrmSl6E';
	private geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDUHwMidRKfDwuAGB7DdXAjrztWhrmSl6E&address='

  private clockUrl = 'https://maps.googleapis.com/maps/api/timezone/json?location=';
  private clockKey = 'AIzaSyAVdZNmru4Nh3sNNjEbETFzjobnnNSW8Pk';

	private embedKey = 'AIzaSyAcGtrSFPk3Mrng_37QhAS2qBPwpQDsU6s';


  constructor(private http: Http) { }

  getWeather(lat: string, lng: string, unit: string){
  	const url = this.weatherUrl + 'lat=' + lat + '&lon=' + lng + '&units='
  		+ unit + '&APPID=' + this.weatherKey;
    console.log('Weather query: ' + url);
  	return this.http.get(url)
  	.map((respuesta: Response) => respuesta.json());
  }

  getTime(lon: string, lat: string){
    const url = this.clockUrl + lat + ',' + lon + '&timestamp=1458000000';
    console.log('Time zone query: ' + url);
    return this.http.get(url)
    .map((respuesta: Response) => respuesta.json());
  }

	getCoordinates (address: string) {
		const url = this.geocodingUrl + address;
		console.log('Coordinates query: ' + url);
		return this.http.get(url)
		.map((response: Response) => response.json())
	}


}
