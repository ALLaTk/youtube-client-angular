import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  constructor(
    public dataService: DataService,
    public filterService: FilterService,
  ) {}
}
