import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ColorsBorder, DAY, Period } from '../models/border-item.model';

@Directive({
  selector: '[appBorderItem]',
})
export class BorderItemDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @Input()
  public itemDate!: string;

  public colorBottom: string = '';

  ngOnInit(): void {
    this.choiceColorBottom();

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-color',
      this.colorBottom,
    );
  }

  private choiceColorBottom(): void {
    const nowDate: Date = new Date();
    const pastDate: Date = new Date(this.itemDate);
    const diff = Math.floor(nowDate.getTime() - pastDate.getTime());
    const days = Math.floor(diff / DAY);

    if (days > Period.month && days <= Period.halfYear) {
      this.colorBottom = ColorsBorder.yellow;
    } else if (days >= Period.days && days <= Period.month) {
      this.colorBottom = ColorsBorder.green;
    } else if (days < Period.days) {
      this.colorBottom = ColorsBorder.blue;
    } else this.colorBottom = ColorsBorder.red;
  }
}
