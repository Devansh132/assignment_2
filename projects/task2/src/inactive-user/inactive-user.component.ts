import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  setInactiveToActive(index: number) {   // Set a user from an inactive state to an active state
    this.userService.setInactiveToActive(index);
  }
}
