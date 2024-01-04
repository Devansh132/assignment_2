import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [],
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter<number>();

  private intervalId: any;
  private counter = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.gameEvent.emit(this.counter++);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalId);   // Used to stop setInterval 
  }
}
