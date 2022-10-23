import { Component } from '@angular/core';
import { DataControlService } from 'src/app/core/services/data-control.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  constructor(
    public dataControl: DataControlService,
    public filterService: FilterService,
  ) {}
}
