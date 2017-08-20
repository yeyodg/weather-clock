import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'we-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'we works!';
  constructor(config: NgbCarouselConfig) {
     // customize default values of carousels used by this component tree
     config.interval = 2500;
     config.wrap = true;
     config.keyboard = true;
   }
}
