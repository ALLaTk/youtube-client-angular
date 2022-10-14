import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SearchItem } from '../../components/search-results/models/search-item.model';
import { SearchResultService } from '../../services/search-result.service';
import * as data from '../../../shared/mock/response.json';
import { SearchResponse } from '../../components/search-results/models/search-response.model';

@Component({
  selector: 'app-item-information-page',
  templateUrl: './item-information-page.component.html',
  styleUrls: ['./item-information-page.component.scss'],
})
export class ItemInformationPageComponent implements OnInit {
  responseData: SearchResponse = data;

  items: SearchItem[] = this.responseData.items;

  @Input() public item: SearchItem | undefined;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    public searchResultService: SearchResultService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const itemId = this.items.find((item) => item.id === params['id']);
      if (itemId) this.item = itemId;
      else this.router.navigate(['/error']);
    });
  }

  returnOnMainPage(): void {
    this.location.back();
  }
}
