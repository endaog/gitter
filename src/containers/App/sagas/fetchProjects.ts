import { batchActions } from 'redux-batched-actions';
import { call, put, select } from 'redux-saga/effects';

import * as api from 'common/services/api';
import { fetchProjectSuccess, fetchProjectError } from '../actions';
import * as Models from '../models';

export function* fetchProjects(action: Models.Action.IFetchProject) {
  try {
    const { name } = action.payload;
    const projectList = yield call(api.getProjects, name);
    
    yield put(batchActions([
      fetchProjectSuccess(projectList),
    ]));
  } catch (error) {
    yield put(batchActions([
      fetchProjectError(error),
    ]));  
  }
}