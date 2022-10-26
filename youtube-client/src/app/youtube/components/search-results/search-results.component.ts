import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentYoutube } from 'src/app/store/selectors/youtube.selector';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  dataStore$ = this.store.select(selectCurrentYoutube);

  constructor(public filterService: FilterService, public store: Store) {}
}
