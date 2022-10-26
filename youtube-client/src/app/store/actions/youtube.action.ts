import { createAction, props } from '@ngrx/store';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

const actionSource = '[Video]';

export const GetVideoYoutube = createAction(
  `${actionSource} Get Video Success`,
  props<{ video: SearchResponse | null }>(),
);
