import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataApiService } from './data-api.service';
import { GetVideoYoutube } from '../../store/actions/youtube.action';

@Injectable()
export class DataControlService {
  constructor(private dataApi: DataApiService, private store: Store) {}

  getDataRequest(value: string): void {
    this.dataApi
      .getSearchRequest(value)
      .pipe(
        map((results) => results.items.map((elem) => elem.id.videoId).join()),
        switchMap((idRequest) => this.dataApi.getVideoRequest(idRequest)),
        tap((video) => this.store.dispatch(GetVideoYoutube({ video }))),
      )
      .subscribe();
  }
}
