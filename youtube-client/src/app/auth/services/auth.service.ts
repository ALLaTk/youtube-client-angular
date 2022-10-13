import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../components/models/login.model';

@Injectable()
export class AuthService {
  isNavigationAllowed: boolean = false;

  constructor(private router: Router) {}

  checkAccess(loginValue: Login) {
    if (loginValue.login && loginValue.password) {
      this.isNavigationAllowed = true;
      this.router.navigate(['/main']);
    }
  }
}
