import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public nameVideo: string = '';

  public getInputValue(value: string) {
    this.nameVideo = value;
  }
}
