import { Component, transition, animate, trigger, state, style } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('activeDesactive', [
      state('active', style({
        opacity: 1
      })),
      state('desactive', style({
        opacity: 0
      })),
      transition('active => desactive', [
        animate('1s')
      ]),
      transition('desactive => active', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent {
  images = [true, false, false, false];
  indexImage = 0;


  constructor() {
    setInterval(() => this.changeImage(), 5000);
  }

  changeImage() {
    switch (this.indexImage) {
      case 0:
        this.images[this.indexImage] = false;
        this.indexImage++;
        this.images[this.indexImage] = true;
        break;
      case 1:
        this.images[this.indexImage] = false;
        this.indexImage++;
        this.images[this.indexImage] = true;
        break;
      case 2:
        this.images[this.indexImage] = false;
        this.indexImage++;
        this.images[this.indexImage] = true;
        break;
      case 3:
        this.images[this.indexImage] = false;
        this.indexImage = 0;
        this.images[this.indexImage] = true;
        break;
    }
  }
}
