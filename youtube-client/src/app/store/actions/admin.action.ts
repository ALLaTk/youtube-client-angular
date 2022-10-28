import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/admin.model';

export const AddCard = createAction(
  '[Card] Get Video Success',
  props<{ card: Card }>(),
);
