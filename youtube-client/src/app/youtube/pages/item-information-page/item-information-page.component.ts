import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCurrentYoutube } from 'src/app/store/selectors/youtube.selector';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-item-information-page',
  templateUrl: './item-information-page.component.html',
  styleUrls: ['./item-information-page.component.scss'],
})
export class ItemInformationPageComponent implements OnInit, OnDestroy {
  items!: SearchItem[];

  item: SearchItem | undefined;

  private itemsSubscribe: Subscription = new Subscription();

  dataStore$ = this.store.select(selectCurrentYoutube);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.itemsSubscribe = this.dataStore$
      .pipe(
        tap((response) => {
          if (response) this.items = response;
        }),
      )
      .subscribe();

    this.route.params.subscribe((params) => {
      if (this.items) {
        const itemId = this.items.find((item) => item.id === params['id']);
        this.item = itemId;
      } else {
        this.router.navigate(['/main']);
      }
    });
  }

  returnOnMainPage(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.itemsSubscribe.unsubscribe();
  }
}
