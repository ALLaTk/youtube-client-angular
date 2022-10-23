import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AdminService {
  url: RegExp =
    /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

  constructor(private router: Router) {}

  createCard() {
    this.router.navigate(['/main']);
  }
}
