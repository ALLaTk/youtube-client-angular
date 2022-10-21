import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class DateValidatorService {
  checkDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;

      if (!value) {
        return null;
      }

      const controlDate = new Date(control.value);
      const currentDate = new Date();

      if (controlDate < currentDate) {
        return { hasDate: { value: true } };
      }
      return null;
    };
  }
}
