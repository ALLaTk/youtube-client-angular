import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginValue: Login = {
    login: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  setLoginValue(): void {
    this.authService.checkIn(this.loginValue);
  }
}
