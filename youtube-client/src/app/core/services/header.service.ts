import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from './data.service';

@Injectable()
export class HeaderService {
  public placeholderText: string = 'What do you want to find?';

  public isToggleFilter: boolean = false;

  constructor(
    public authService: AuthService,
    private dataService: DataService,
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
}
