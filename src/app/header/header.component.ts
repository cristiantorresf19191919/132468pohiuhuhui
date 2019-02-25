import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rubberBandAnimation  } from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    rubberBandAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class HeaderComponent implements OnInit {

 condition:boolean=true;

  constructor() {
  }
  
  wheelmouse(e){
    if (window.scrollY < 200 ){
      this.condition = true;
    } else{
      this.condition = false;
    }
  }

  ngOnInit() {
   
    
  }

}