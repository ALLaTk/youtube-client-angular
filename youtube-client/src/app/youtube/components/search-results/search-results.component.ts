import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCard } from 'src/app/store/selectors/admin.selector';
import { selectCurrentYoutube } from 'src/app/store/selectors/youtube.selector';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  video$ = this.store.select(selectCurrentYoutube);

  cards$ = this.store.select(selectCurrentCard);

  constructor(public filterService: FilterService, public store: Store) {}
}
