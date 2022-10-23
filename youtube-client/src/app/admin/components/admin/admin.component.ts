import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { DateValidatorService } from '../../services/date-validator.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  formAdmin: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    discription: new FormControl('', [Validators.required]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(this.adminService.url),
    ]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern(this.adminService.url),
    ]),
    date: new FormControl('', [
      Validators.required,
      this.dateValidator.checkDate(),
    ]),
  });

  constructor(
    private dateValidator: DateValidatorService,
    public adminService: AdminService,
  ) {}
}
