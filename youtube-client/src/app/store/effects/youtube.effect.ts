import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, from, of, catchError } from 'rxjs';
import { DataApiService } from 'src/app/core/services/data-api.service';
import * as YoutobeActions from '../actions/youtube.action';

@Injectable()
export class YoutubeEffects {
  constructor(private actions$: Actions, private dataApi: DataApiService) {}

  loadVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutobeActions.addParams),
      switchMap(({ content: value }) =>
        from(this.dataApi.getSearchRequest(value)).pipe(
          map((results) => results.items.map((elem) => elem.id.videoId).join()),
          switchMap((idRequest) => this.dataApi.getVideoRequest(idRequest)),
          map((videos) => YoutobeActions.loadVideoSuccess({ video: videos })),
          catchError((error) => of(YoutobeActions.loadVideoFailure({ error }))),
        ),
      ),
    );
  });
}
