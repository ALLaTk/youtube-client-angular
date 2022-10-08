import { Component, EventEmitter, Output } from '@angular/core';
import { BySort } from './models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() transmitkeyWordEventEmitter = new EventEmitter<string>();

  @Output() transmitflagSortEventEmitter = new EventEmitter<string[]>();

  public flagSortValue: string = '';

  public activeClass: string = '';

  public getKeyWordSearch(value: string) {
    this.transmitkeyWordEventEmitter.emit(value);
  }

  public changeSortValue(value: string) {
    if (this.flagSortValue === '' || this.flagSortValue === BySort.descending) {
      this.flagSortValue = BySort.ascending;
    } else this.flagSortValue = BySort.descending;
    this.transmitflagSortEventEmitter.emit([value, this.flagSortValue]);
    this.activeClass = value;
  }
}
