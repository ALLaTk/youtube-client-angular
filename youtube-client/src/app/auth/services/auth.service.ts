import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { loadVideoSuccess } from 'src/app/store/actions/youtube.action';
import { Login, LoginButton } from '../models/login.model';

@Injectable()
export class AuthService {
  private isNavigationAllowedSubj$ = new BehaviorSubject<boolean>(false);

  isToggle: boolean = false;

  userName: string = 'Your Name';

  login: string = LoginButton.loginIn;

  colorButtonLogin: string = LoginButton.loginColorIn;

  constructor(private router: Router, private store: Store) {}

  checkIn(loginValue: Login): void {
    if (loginValue.login && loginValue.password) {
      localStorage.setItem('user', JSON.stringify(loginValue));
      this.isNavigationAllowedSubj$.next(true);
      this.isToggle = true;
      this.userName = loginValue.login;
      this.login = LoginButton.loginOut;
      this.colorButtonLogin = LoginButton.loginColorOut;
      this.router.navigate(['/main']);
    }
  }

  checkOut(): void {
    localStorage.removeItem('user');
    this.isNavigationAllowedSubj$.next(false);
    this.isToggle = false;
    this.userName = 'Your Name';
    this.login = LoginButton.loginIn;
    this.colorButtonLogin = LoginButton.loginColorIn;
    this.router.navigate(['/login']);
    this.store.dispatch(loadVideoSuccess({ video: null }));
  }

  checkLogin(): void {
    const loginValue = localStorage.getItem('user');
    if (loginValue) {
      const login: string = JSON.parse(loginValue)?.login;
      if (login) {
        this.isNavigationAllowedSubj$.next(true);
        this.isToggle = true;
        this.login = LoginButton.loginOut;
        this.colorButtonLogin = LoginButton.loginColorOut;
        this.userName = login;
      }
    }
  }

  returnIsValueLogin(): Observable<boolean> {
    return this.isNavigationAllowedSubj$;
  }
}
