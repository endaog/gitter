import { expect } from 'chai';
import * as Immutable from 'immutable';

import { appInitialState, default as appReducer } from 'containers/App/reducer';
import { ActionTypes } from './constants';
import * as Models from './models';

let INITIAL_STATE: Models.State.IState;
beforeEach(() => {
  INITIAL_STATE = appInitialState;
});

test('Handle action FETCH_PROJECTS_SUCCESS', () => {
  const githubProjects = [{ id: '1', name: 'javascrpt', description: 'test' }, { id: 2, name: 'es6', description: 'test' }];
 
  const action = {
    type: ActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: {
        projectList: githubProjects,
    },
  };

  const state = INITIAL_STATE
    .set('projectList', Immutable.fromJS(githubProjects))

  const newState = appReducer(INITIAL_STATE, action);
  expect(state).to.be.deep.equal(newState);
});