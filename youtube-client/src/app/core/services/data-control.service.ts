import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { DataApiService } from './data-api.service';

@Injectable()
export class DataControlService {
  constructor(private dataApi: DataApiService) {}

  getDataRequest(value: string): void {
    this.dataApi
      .getSearchRequest(value)
      .pipe(
        map((results) => results.items.map((elem) => elem.id.videoId).join()),
        switchMap((idRequest) => this.dataApi.getVideoRequest(idRequest)),
        tap((video) => video),
      )
      .subscribe();
  }
}
