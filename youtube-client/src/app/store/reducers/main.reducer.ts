import { combineReducers } from '@ngrx/store';
import { adminReducer } from './admin.reducer';
import { youtubeReducer } from './youtube.reducer';

export const mainReducer = {
  video: youtubeReducer,
  card: adminReducer,
};

export const combineReducer = combineReducers(mainReducer);
