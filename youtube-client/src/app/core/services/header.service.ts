import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from './data.service';

@Injectable()
export class HeaderService {
  public placeholderText: string = 'What do you want to find?';

  public isToggleFilter: boolean = false;

  public isAddCard: boolean = true;

  constructor(
    public authService: AuthService,
    private dataService: DataService,
    private router: Router,
  ) {}

  public toggleFilterBlock(): void {
    if (this.authService.isToggleFilter)
      this.isToggleFilter = !this.isToggleFilter;
  }

  public getNameVideo(value: string) {
    if (this.authService.isToggleFilter) {
      this.dataService.getDataRequest(value);
    }
  }

  createCard() {
    if (this.isAddCard) this.router.navigate(['/admin']);
    else this.router.navigate(['/main']);
    this.isAddCard = !this.isAddCard;
  }
}
