import { batchActions } from 'redux-batched-actions';
import { call, put } from 'redux-saga/effects';

import * as api from 'common/services/api';
import { fetchTweetSuccess, fetchTweetError } from '../actions';
import * as Models from '../models';

export function* fetchTweets(action: Models.Action.IFetchTweet) {
  try {
    const { name } = action.payload;
    const tweetList = yield call(api.getTweets, name);
    yield put(batchActions([
      fetchTweetSuccess(tweetList),
    ]));
  } catch (error) {
    yield put(batchActions([
      fetchTweetError(error),
    ]));  
  }
}