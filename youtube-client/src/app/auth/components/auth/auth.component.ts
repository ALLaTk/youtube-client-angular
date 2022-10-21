import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { PasswordValidatorService } from '../../services/password-validator.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  formLogin: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordValidaror.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordValidaror.passwordPattern),
      this.passwordValidaror.createPasswordValidator(),
    ]),
  });

  constructor(
    private authService: AuthService,
    public passwordValidaror: PasswordValidatorService,
  ) {}

  setLoginValue() {
    this.authService.checkIn(this.formLogin.value);
  }
}
