import { Component } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';
import * as data from '../../mock/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  responseData: SearchResponse = data;

  items: SearchItem[] = this.responseData.items;
}
