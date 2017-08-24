import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'we-homepage',
  templateUrl: './homepage.component.html',
  styles: [`


  `],
  animations: [
    // trigger('myAwesomeAnimation', [
    //     state('small', style({
    //         transform: 'scale(1)',
    //     })),
    //     state('large', style({
    //         transform: 'scale(1.2)',
    //     })),
    //     transition('small <=> large',
    //     	animate('100ms ease-in', 
    //     		style(
	   //      	{
	   //      		transform: 'translateY(40px)'
	   //      	})
    //     	)
    //     ),
    // ]),
  ]
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
