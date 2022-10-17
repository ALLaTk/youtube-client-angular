import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { Colors, DAY, Period } from '../models/color-item.model';

@Directive({
  selector: '[appColorItem]',
})
export class ColorItemDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @Input()
  public itemDate!: string;

  @Input() public elem: string = '';

  public color: string = '';

  ngAfterViewInit(): void {
    this.choiceColor();

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      this.elem,
      this.color,
    );
  }

  private choiceColor(): void {
    const nowDate: Date = new Date();
    const pastDate: Date = new Date(this.itemDate);
    const diff = Math.floor(nowDate.getTime() - pastDate.getTime());
    const days = Math.floor(diff / DAY);

    if (days > Period.month && days <= Period.halfYear) {
      this.color = Colors.yellow;
    } else if (days >= Period.week && days <= Period.month) {
      this.color = Colors.green;
    } else if (days < Period.week) {
      this.color = Colors.blue;
    } else this.color = Colors.red;
  }
}
