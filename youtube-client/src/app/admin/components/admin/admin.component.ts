import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddCard } from 'src/app/store/actions/admin.action';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isAdmin: boolean = false;

  url: RegExp =
    /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

  formAdmin: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(this.url),
    ]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern(this.url),
    ]),
  });

  constructor(private router: Router, private store: Store) {}

  createCard() {
    if (this.router.url === '/admin') this.router.navigate(['/main']);
    else this.router.navigate(['/admin']);
    this.store.dispatch(AddCard({ card: this.formAdmin.value }));
  }
}
