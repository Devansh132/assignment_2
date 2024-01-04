import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() evenNumbers: number[] = [];   //@Input used to pass data from a parent component to a child component

  constructor() { }

  ngOnInit() {
  }
}
