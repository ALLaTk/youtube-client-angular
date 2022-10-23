import { Injectable } from '@angular/core';
import { map, ReplaySubject, switchMap, tap } from 'rxjs';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { DataApiService } from './data-api.service';

@Injectable()
export class DataControlService {
  public dataSubj$ = new ReplaySubject<SearchItem[] | null>();

  constructor(private dataApi: DataApiService) {}

  getDataRequest(value: string): void {
    this.dataApi
      .getSearchRequest(value)
      .pipe(
        map((results) => results.items.map((elem) => elem.id.videoId).join()),
        switchMap((idRequest) => this.dataApi.getVideoRequest(idRequest)),
        tap((newResponse) => this.dataSubj$.next(newResponse.items)),
      )
      .subscribe();
  }
}
