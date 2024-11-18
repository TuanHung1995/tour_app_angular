import { Tour } from "./tour";
import { User } from "./user";

export interface Follow {
  id: number;
  tourId: number;
  userId: number;
  tour: Tour;
  user: User;
}