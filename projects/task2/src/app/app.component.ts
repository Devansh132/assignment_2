import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ActiveUserComponent} from '../active-user/active-user.component';
import {InactiveUserComponent} from '../inactive-user/inactive-user.component';
import {UserService} from '../user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ActiveUserComponent, InactiveUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent {
  title = 'task2';
}
