import { createAction, props } from '@ngrx/store';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

export const addParams = createAction(
  '[Query] Add Params',
  props<{ content: string }>(),
);

export const loadVideoSuccess = createAction(
  '[Video] Video Load Success',
  props<{ video: SearchResponse | null }>(),
);

export const loadVideoFailure = createAction(
  '[Video] Video Load Failure',
  props<{ error: string }>(),
);
