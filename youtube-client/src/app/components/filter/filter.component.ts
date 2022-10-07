import { Component, EventEmitter, Output } from '@angular/core';
import { BySort } from './models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() transmitkeyWordEventEmitter = new EventEmitter<string>();

  @Output() transmitflagDateEventEmitter = new EventEmitter<string[]>();

  public flagSortValue: string = '';

  public activClass: string = '';

  public getKeyWordSearch(value: string) {
    this.transmitkeyWordEventEmitter.emit(value);
  }

  public changeSortValue(value: string) {
    if (this.flagSortValue === '' || this.flagSortValue === BySort.descending) {
      this.flagSortValue = BySort.ascending;
    } else this.flagSortValue = BySort.descending;
    this.transmitflagDateEventEmitter.emit([value, this.flagSortValue]);
    this.activClass = value;
  }
}
