import { Data } from '@angular/router';

export interface Card {
  title: string;
  description: string;
  image: string;
  video: string;
  date: Data;
  id: number;
}
