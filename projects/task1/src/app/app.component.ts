import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {GameControlComponent} from '../game-control/game-control.component'
import {EvenComponent} from '../even/even.component'
import {OddComponent} from '../odd/odd.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,GameControlComponent,EvenComponent,OddComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameEvent(number: number) {
    if (number % 2 === 0) {            // Check number is even or not
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
}
