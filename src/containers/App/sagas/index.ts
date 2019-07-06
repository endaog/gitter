import { takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '../constants';
import { fetchProjects } from './fetchProjects';
import { fetchTweets } from './fetchTweets';

export default [
  takeEvery(ActionTypes.FETCH_PROJECTS, fetchProjects),
  takeEvery(ActionTypes.FETCH_TWEETS, fetchTweets),
];