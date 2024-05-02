import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('dropIn', [
      state(
        'void',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        })
      ),
      transition('void => *', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class AppComponent {
  public stateAnimate: boolean;

  constructor() {
    this.stateAnimate = false;
  }

  public animate(): void {
    this.stateAnimate = true;
    setTimeout(() => {
      return (this.stateAnimate = false);
    }, 2000);
  }
}
