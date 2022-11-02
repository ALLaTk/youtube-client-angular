import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardState } from '../reducers/admin.reducer';

export const selectCardStore = createFeatureSelector<CardState>('card');
export const selectCurrentCard = createSelector(
  selectCardStore,
  (state) => state?.card,
);
