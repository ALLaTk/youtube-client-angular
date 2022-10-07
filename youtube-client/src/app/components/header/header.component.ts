import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public placeholderText: string = 'What are you want to find out?';

  public flagToggleFilterBlock: boolean = false;

  @Output() nameVideoEventEmitter = new EventEmitter<string>();

  @Output() keyWordEventEmitter = new EventEmitter<string>();

  @Output() flagDateEventEmitter = new EventEmitter<string[]>();

  public toggleFilterBlock() {
    this.flagToggleFilterBlock = !this.flagToggleFilterBlock;
  }

  public getValueSearch(value: string) {
    if (value) this.nameVideoEventEmitter.emit(value);
  }

  public getKeyWordValue(value: string) {
    this.keyWordEventEmitter.emit(value);
  }

  public getflagSortValue(value: string[]) {
    this.flagDateEventEmitter.emit(value);
  }
}
