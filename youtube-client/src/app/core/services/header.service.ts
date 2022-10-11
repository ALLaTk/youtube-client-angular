import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  public nameVideo: string = '';

  public keyWord: string = '';

  public sortData: string[] = [];

  public valueSort: string = '';

  public flagSort: string = '';

  public isToggleFilter: boolean = false;

  public toggleFilterBlock() {
    this.isToggleFilter = !this.isToggleFilter;
  }

  public getRequestNameVideo(value: string): void {
    if (value) this.nameVideo = value;
  }

  public getKeywordValue(value: string) {
    this.keyWord = value;
  }

  public getDataSortValue(value: string[]) {
    this.sortData = value;
  }
}
