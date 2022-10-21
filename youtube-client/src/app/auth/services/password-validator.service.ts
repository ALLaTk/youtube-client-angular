import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()
export class PasswordValidatorService {
  emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;

  createPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;

      if (!value) {
        return null;
      }

      const hasUpperLowerCase = /(?=.*[a-z])(?=.*[A-Z])/.test(value);

      const hasСharacter = /[-+_!@#$%^&*.,?]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperLowerCase && hasСharacter && hasNumeric;

      return !passwordValid
        ? {
            case: !hasUpperLowerCase,
            simbol: !hasСharacter,
            number: !hasNumeric,
          }
        : null;
    };
  }
}
