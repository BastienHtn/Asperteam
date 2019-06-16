import { Component, trigger, state, style, transition, animate, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'accueil-root',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
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
export class AccueilComponent implements OnInit {

  public open: boolean;

  constructor(private location: Location) {

  }

  ngOnInit() {
  }

  openClose() {
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }
  }
}
