import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input()
  public item!: SearchItem;

  private colorsBorderObj: { [key: string]: string } = {
    red: '#EB5757',
    yellow: '#F2C94C',
    green: '#27AE60',
    blue: '#2F80ED',
  };

  public colorBottom: string = '';

  ngOnInit(): void {
    this.choiceColorBottom();
  }

  private choiceColorBottom(): void {
    const nowDate: Date = new Date();
    const pastDate: Date = new Date(this.item.snippet.publishedAt);
    const diff = Math.floor(nowDate.getTime() - pastDate.getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);

    if (days >= 31 && days <= 30 * 6) {
      this.colorBottom = this.colorsBorderObj['yellow'];
    } else if (days >= 7 && days <= 30) {
      this.colorBottom = this.colorsBorderObj['green'];
    } else if (days < 7) {
      this.colorBottom = this.colorsBorderObj['blue'];
    } else this.colorBottom = this.colorsBorderObj['red'];
  }
}
