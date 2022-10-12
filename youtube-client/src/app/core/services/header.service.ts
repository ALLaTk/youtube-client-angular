import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  public nameVideo: string = '';

  public isToggleFilter: boolean = false;

  public toggleFilterBlock(): void {
    this.isToggleFilter = !this.isToggleFilter;
  }

  public getRequestNameVideo(value: string): void {
    if (value) this.nameVideo = value.trim();
  }
}
