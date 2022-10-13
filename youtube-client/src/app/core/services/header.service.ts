import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class HeaderService {
  public nameVideo: string = '';

  public isToggleFilter: boolean = false;

  constructor(public authService: AuthService) {}

  public toggleFilterBlock(): void {
    if (this.authService.isNavigationAllowed)
      this.isToggleFilter = !this.isToggleFilter;
  }

  public getRequestNameVideo(value: string): void {
    if (value && this.authService.isNavigationAllowed)
      this.nameVideo = value.trim();
  }
}
