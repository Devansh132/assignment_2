import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers: string[] = ['User1', 'User2', 'User3'];
  inactiveUsers: string[] = ['User4', 'User5', 'User6'];

  setActiveToInactive(index: number) {
    const user = this.activeUsers.splice(index, 1);  // Removes the user from the activeUsers array and assigns it to the user variable.
    this.inactiveUsers.push(...user);
  }

  setInactiveToActive(index: number) {
    const user = this.inactiveUsers.splice(index, 1); // Removes the user from the inactiveUsers array and assigns it to the user variable.
    this.activeUsers.push(...user);
  }
}
