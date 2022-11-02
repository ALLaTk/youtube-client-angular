import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from '../reducers/youtube.reducer';

export const selectYoutubeStore = createFeatureSelector<YoutubeState>('video');
export const selectCurrentYoutube = createSelector(
  selectYoutubeStore,
  (state) => state?.video?.items,
);
