import { Component, Input } from '@angular/core';
import { Card } from 'src/app/youtube/models/admin.model';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  @Input()
  public item!: Card;
}
