import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public placeholderText: string = 'What are you want to find out?';

  public flagForRenderFilterBlock: boolean = false;

  public showFilterBlock() {
    if (this.flagForRenderFilterBlock) this.flagForRenderFilterBlock = false;
    else this.flagForRenderFilterBlock = true;
  }
}
