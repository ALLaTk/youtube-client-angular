import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';

@Injectable()
export class AuthService {
  isNavigationAllowed: boolean = false;

  userName: string = 'Your Name';

  constructor(private router: Router) {}

  checkIn(loginValue: Login): void {
    if (loginValue.login && loginValue.password) {
      localStorage.setItem('user', JSON.stringify(loginValue));
      this.isNavigationAllowed = true;
      this.userName = loginValue.login;
      this.router.navigate(['/main']);
    }
  }

  checkOut(): void {
    localStorage.removeItem('user');
    this.isNavigationAllowed = false;
    this.userName = 'Your Name';
    this.router.navigate(['/login']);
  }

  checkLogin(): void {
    const loginValue = localStorage.getItem('user');
    if (loginValue) {
      const login: string = JSON.parse(loginValue)?.login;
      if (login) {
        this.isNavigationAllowed = true;
        this.userName = login;
      }
    }
  }
}
