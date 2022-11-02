import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { selectCurrentCard } from 'src/app/store/selectors/admin.selector';
import { Card } from 'src/app/youtube/models/admin.model';

@Component({
  selector: 'app-add-card-info-page',
  templateUrl: './add-card-info-page.component.html',
  styleUrls: ['./add-card-info-page.component.scss'],
})
export class AddCardInfoPageComponent implements OnInit, OnDestroy {
  items!: Card[];

  item: Card | undefined;

  private itemsSubscribe: Subscription = new Subscription();

  cards$ = this.store.select(selectCurrentCard);

  constructor(
    private routerActivated: ActivatedRoute,
    private location: Location,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.itemsSubscribe = this.cards$
      .pipe(
        tap((response) => {
          if (response) this.items = response;
        }),
      )
      .subscribe();

    this.routerActivated.params.subscribe((params) => {
      if (this.items) {
        const itemId = this.items.find((item) => `${item.id}` === params['id']);
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
