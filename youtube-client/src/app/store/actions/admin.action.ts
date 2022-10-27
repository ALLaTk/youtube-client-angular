import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/admin.model';

const actionSource = '[Card]';

export const AddCard = createAction(
  `${actionSource} Get Video Success`,
  props<{ card: Card }>(),
);
