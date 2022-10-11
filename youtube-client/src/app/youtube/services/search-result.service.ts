import { Injectable } from '@angular/core';
import * as data from '../../shared/mock/response.json';
import { SearchItem } from '../components/search-results/models/search-item.model';
import { SearchResponse } from '../components/search-results/models/search-response.model';

@Injectable()
export class SearchResultService {
  responseData: SearchResponse = data;

  items: SearchItem[] = this.responseData.items;
}
