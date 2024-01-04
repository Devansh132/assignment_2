import { Component, Input, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddNumbers: number[] = [];  // Pass data from a parent to child component

  constructor() { }

  ngOnInit() {
  }
}