import { takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '../constants';
import { fetchProjects } from './fetchProjects';

export default [
  takeEvery(ActionTypes.FETCH_PROJECTS, fetchProjects),
];