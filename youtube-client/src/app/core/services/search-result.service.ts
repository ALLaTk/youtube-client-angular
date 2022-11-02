import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
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
import { addParams } from 'src/app/store/actions/youtube.action';

@Injectable()
export class SearchResultService implements OnDestroy {
  private inputSubscribe: Subscription = new Subscription();

  constructor(private headerService: HeaderService, private store: Store) {}

  searchWord(input: ElementRef) {
    this.inputSubscribe = fromEvent(input.nativeElement, 'keyup')
      .pipe(
        map(
          (elem) => <string>(<HTMLInputElement>(<InputEvent>elem).target).value,
        ),
        filter((text) => (<string>text.trim()).length > 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap((value) => this.store.dispatch(addParams({ content: value }))),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.inputSubscribe.unsubscribe();
  }
}
