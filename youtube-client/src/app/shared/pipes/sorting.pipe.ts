import { Pipe, PipeTransform } from '@angular/core';
import { BySort } from '../../components/filter/models/filter.model';
import { SearchItem } from '../../components/search-results/models/search-item.model';
import { SortKeyword } from './models/sorting.model';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(
    items: SearchItem[],
    bySort: string,
    keySort?: string,
  ): SearchItem[] {
    if (!keySort) return items;

    switch (bySort) {
      case SortKeyword.byWord: {
        return items.filter((item) =>
          item.snippet.title.toLowerCase().includes(keySort.toLowerCase()),
        );
      }
      case SortKeyword.byDate: {
        items.sort(
          (a, b) =>
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime(),
        );
        return keySort === BySort.descending ? items.reverse() : items;
      }
      case SortKeyword.byViews: {
        items.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
        return keySort === BySort.descending ? items.reverse() : items;
      }
      default:
        return items;
    }
  }
}
