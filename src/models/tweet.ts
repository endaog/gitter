import { DeepIMap } from './redux/DeepIMap';

export interface Tweet {
  id: string;
  tweet: string;
}

export type TweetMap = DeepIMap<Tweet>;