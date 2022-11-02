import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/admin.model';
import { AddCard } from '../actions/admin.action';

export interface CardState {
  card: Card[] | [];
}

export const initalCardState: CardState = {
  card: [],
};

export const adminReducer = createReducer(
  initalCardState,
  on(
    AddCard,
    (state, { card }): CardState => ({
      ...state,
      card: [
        ...state.card,
        {
          ...card,
          date: new Date(),
          id: Math.floor(Math.random() * 1000000),
        },
      ],
    }),
  ),
);
