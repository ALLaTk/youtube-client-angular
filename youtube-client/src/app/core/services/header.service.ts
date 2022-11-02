import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataControlService } from './data-control.service';

@Injectable()
export class HeaderService {
  public placeholderText: string = 'What do you want to find?';

  public isToggleFilter: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private dataControl: DataControlService,
  ) {}

  public toggleFilterBlock(): void {
    if (this.authService.isToggle) this.isToggleFilter = !this.isToggleFilter;
  }

  public getNameVideo(value: string) {
    if (this.authService.isToggle) {
      this.dataControl.getDataRequest(value);
    }
  }

  createCard() {
    if (this.router.url === '/admin') this.router.navigate(['/main']);
    else this.router.navigate(['/admin']);
  }
}
