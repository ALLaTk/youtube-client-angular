import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/core/services/data.service';
import { Subscription } from 'rxjs';
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

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    public dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.itemsSubscribe = this.dataService.data$.subscribe((response) => {
      if (response) this.items = response;
    });

    this.route.params.subscribe((params) => {
      const itemId = this.items.find((item) => item.id === params['id']);
      if (itemId) this.item = itemId;
      else this.router.navigate(['/error']);
    });
  }

  returnOnMainPage(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.itemsSubscribe.unsubscribe();
  }
}
