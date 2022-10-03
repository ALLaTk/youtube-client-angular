import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public placeholderText: string = 'What are you want to find out?';

  public flagToggleFilterBlock: boolean = false;

  public toggleFilterBlock() {
    this.flagToggleFilterBlock = !this.flagToggleFilterBlock;
  }
}
