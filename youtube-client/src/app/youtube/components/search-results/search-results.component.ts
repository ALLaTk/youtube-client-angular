import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { SearchItem } from './models/search-item.model';
import { SearchResultService } from '../../services/search-result.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  items: SearchItem[] = this.searchResultService.items;

  constructor(
    public headerService: HeaderService,
    public searchResultService: SearchResultService,
    public filterService: FilterService,
  ) {}
}
