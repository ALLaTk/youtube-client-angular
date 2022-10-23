import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, retry } from 'rxjs';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable()
export class DataApiService {
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

  getVideoRequest(value: string): Observable<SearchResponse> {
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
}
