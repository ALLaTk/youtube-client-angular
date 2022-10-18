import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, ReplaySubject, retry } from 'rxjs';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable()
export class DataService {
  // Which one is better to use?
  public data$ = new ReplaySubject<SearchItem[] | null>();
  // public data$ = new BehaviorSubject<SearchItem[] | null>(null);

  constructor(private httpClient: HttpClient) {}

  getSearchRequest(value: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', 12)
      .set('q', value);

    return this.httpClient.get<SearchResponse>('search/', { params }).pipe(
      retry(4),
      catchError((error) => {
        console.log('[ERROR]: ', error);
        return EMPTY;
      }),
    );
  }

  getVideoRequest(value: string) {
    const params = new HttpParams()
      .set('id', value)
      .set('part', 'snippet,statistics');

    return this.httpClient.get<SearchResponse>('videos/', { params }).pipe(
      retry(4),
      catchError((error) => {
        console.log('[ERROR]: ', error);
        return EMPTY;
      }),
    );
  }

  getDataRequest(value: string) {
    this.getSearchRequest(value).subscribe((response) => {
      const idRequest: string = response.items
        .map((elem) => elem.id.videoId)
        .join();

      this.getVideoRequest(idRequest).subscribe((newResponse) => {
        this.data$.next(newResponse.items);
      });
    });
  }
}
