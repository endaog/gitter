import Immutable from 'immutable';

import { Reducer } from 'models';
import { ActionTypes } from './constants';
import * as Models from './models';

export const appInitialState: Models.State.IState = Immutable.Map();

const appReducer: Reducer<Models.State.IState> = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS: return fetchProjects(state, action);
    default: return state;
  }
};

export const fetchProjects: Reducer<Models.State.IState, Models.Action.IFetchProject> = (state, action) => {
  const { name } = action.payload;
  return state.set('name', Immutable.fromJS(name));
}

export default appReducer;