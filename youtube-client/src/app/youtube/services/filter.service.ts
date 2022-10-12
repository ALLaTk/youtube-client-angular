import { Injectable } from '@angular/core';
import { BySort } from 'src/app/shared/models/sorting.model';

@Injectable()
export class FilterService {
  public sortingDirection: string = '';

  public activeClass: string = '';

  public keyWord: string = '';

  public valueSort: string = '';

  public flagSortDirection: string = '';

  public getSearchKeyWord(value: string): void {
    this.keyWord = value;
  }

  public changeSortValue(value: string): void {
    if (
      this.sortingDirection === '' ||
      this.sortingDirection === BySort.descending
    ) {
      this.sortingDirection = BySort.ascending;
    } else this.sortingDirection = BySort.descending;
    this.valueSort = value;
    this.flagSortDirection = this.sortingDirection;
    this.activeClass = value;
  }
}
