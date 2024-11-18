import { Tour } from './tour';

export interface Item {
  id: number;
  price: number;
  quantity: number;
  date: string;
  tour_id: number;
  tour: Tour;
}