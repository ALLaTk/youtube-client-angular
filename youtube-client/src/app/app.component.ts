import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public nameVideo: string = '';

  public keyWord: string = '';

  public sortData: string[] = [];

  public getRequestValue(value: string) {
    this.nameVideo = value;
  }

  public getKeywordValue(value: string) {
    this.keyWord = value;
  }

  public getDataSortValue(value: string[]) {
    this.sortData = value;
  }
}
