import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { BySort, SortKeyword } from '../models/sorting.model';

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
        const sortDate = [...items].sort(
          (a, b) =>
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime(),
        );
        return keySort === BySort.descending ? sortDate.reverse() : sortDate;
      }
      case SortKeyword.byViews: {
        const sortView = [...items].sort(
          (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
        );
        return keySort === BySort.descending ? sortView.reverse() : sortView;
      }
      default:
        return items;
    }
  }
}
