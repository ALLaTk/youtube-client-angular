import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Login } from '../models/login.model';

@Injectable()
export class AuthService {
  isNavigationAllowed: boolean = false;

  userName: string = 'Your Name';

  constructor(private router: Router, private dataService: DataService) {}

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
    this.dataService.data$.next(null);
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
