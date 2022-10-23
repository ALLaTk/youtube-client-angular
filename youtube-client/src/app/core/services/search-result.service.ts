import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Subscription,
  tap,
} from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';

@Injectable()
export class SearchResultService implements OnDestroy {
  private inputSubscribe: Subscription = new Subscription();

  constructor(private headerService: HeaderService) {}

  searchWord(input: ElementRef) {
    this.inputSubscribe = fromEvent(input.nativeElement, 'keyup')
      .pipe(
        map(
          (elem) => <string>(<HTMLInputElement>(<InputEvent>elem).target).value,
        ),
        filter((text) => (<string>text.trim()).length > 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap((value) => this.headerService.getNameVideo(value)),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.inputSubscribe.unsubscribe();
  }
}
