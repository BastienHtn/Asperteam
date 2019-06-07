import { Component, trigger, state, style, transition, animate, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'inline-block',
        // margin: '0px 3rem 0px 0px'
      })),
      state('close', style({
        display: 'none',
        // margin: '0px 0px 0px 0px'
      })),
      transition('open => close', [
        animate('0s')
      ]),
      transition('close => open', [
        animate('0s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {

  public open: boolean;

  constructor(private location: Location) {

  }

  ngOnInit() {
  }

  isHomePage() {
    return this.location.path() === '/home';
  }

  openClose() {
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }
  }
}
