import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpService } from '../http.service';

@Component({
  selector: 'we-clock',
  templateUrl: './clock.component.html',
  styles: [
     `
    @font-face {

        font-weight: normal;
        font-style: normthis.
    }

    #contReloj{
    background: rgba(0,255,255,.5);
    display: block;
    margin: 0 0 40px 40px;
    text-align: center;
    width: 500px;
    }
    #contReloj > p{
        color: #fff;
        display: inline-block;
        font-family: 'code_boldregular';
        font-size: 6em;
    }


`
  ]
})
export class ClockComponent implements OnInit {
  public hours: string;
  public minutes: string;
  public seconds: string;
  public address: string = 'Caracas';
  public zoom: number = 1;
  public searched: boolean = false;
  public formatedAddress: string;
  constructor(private http: HttpService) {}

  ngOnInit() {
  }

  onCheckTime(form: NgForm){
    this.searched = true;
    let miliseconds, localOffset, placeOffset, time;
    this.address = form.value.city + ', ' + form.value.country;
    this.zoom = 9;
  	this.http.getCoordinates(this.address)
  	.subscribe(
  		(data) => {
        console.log('Coordinates response')
        console.log(data)
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        this.formatedAddress = data.results[0].formatted_address;
  			this.http.getTime(lng, lat)
  			.subscribe(
          (data) => {
            console.log('Time Zone response')
            console.log(data)
            let date = new Date();
            placeOffset = data.rawOffset * 1000;
            localOffset = date.getTimezoneOffset() * 1000 * 60;
            miliseconds = date.getTime();
            time = miliseconds + placeOffset + localOffset;
            date.setTime(time);
            this.hours = date.getHours().toString();
            this.minutes = date.getMinutes().toString();
            this.seconds = date.getSeconds().toString();
            this.searched = true;
            setInterval(() => {
              time += 1000;
              date.setTime(time);
              this.hours = date.getHours().toString();
              this.minutes = date.getMinutes().toString();
              this.seconds = date.getSeconds().toString();
            },1000);
          },
          (error) => console.log(error)

        );
  		},
  		(error) => console.log(error)
  	);
  }



}
