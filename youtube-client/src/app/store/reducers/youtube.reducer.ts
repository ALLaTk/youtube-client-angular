import { createReducer, on } from '@ngrx/store';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';
import { GetVideoYoutube } from '../actions/youtube.action';

export interface YoutubeState {
  video: SearchResponse | null;
}

export const initalYoutubeState: YoutubeState = {
  video: null,
};

export const youtubeReducer = createReducer(
  initalYoutubeState,
  on(
    GetVideoYoutube,
    (state, { video }): YoutubeState => ({ ...state, video }),
  ),
);
