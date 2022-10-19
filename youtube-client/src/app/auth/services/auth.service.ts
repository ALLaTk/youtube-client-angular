import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { Login, LoginButton } from '../models/login.model';

@Injectable()
export class AuthService {
  private isNavigationAllowed = new BehaviorSubject<boolean>(false);

  isToggle: boolean = false;

  userName: string = 'Your Name';

  login: string = LoginButton.loginIn;

  colorButtonLogin: string = LoginButton.loginColorIn;

  constructor(private router: Router, private dataService: DataService) {}

  checkIn(loginValue: Login): void {
    if (loginValue.login && loginValue.password) {
      localStorage.setItem('user', JSON.stringify(loginValue));
      this.isNavigationAllowed.next(true);
      this.isToggle = true;
      this.userName = loginValue.login;
      this.login = LoginButton.loginOut;
      this.colorButtonLogin = LoginButton.loginColorOut;
      this.router.navigate(['/main']);
    }
  }

  checkOut(): void {
    localStorage.removeItem('user');
    this.isNavigationAllowed.next(false);
    this.isToggle = false;
    this.userName = 'Your Name';
    this.login = LoginButton.loginIn;
    this.colorButtonLogin = LoginButton.loginColorIn;
    this.router.navigate(['/login']);
    this.dataService.data$.next(null);
  }

  checkLogin(): void {
    const loginValue = localStorage.getItem('user');
    if (loginValue) {
      const login: string = JSON.parse(loginValue)?.login;
      if (login) {
        this.isNavigationAllowed.next(true);
        this.isToggle = true;
        this.login = LoginButton.loginOut;
        this.colorButtonLogin = LoginButton.loginColorOut;
        this.userName = login;
      }
    }
  }

  returnIsValueLogin(): Observable<boolean> {
    return this.isNavigationAllowed;
  }
}
