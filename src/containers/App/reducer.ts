import Immutable from 'immutable';

import { Reducer } from 'models';
import { ActionTypes } from './constants';
import * as Models from './models';

export const appInitialState: Models.State.IState = Immutable.Map();

const appReducer: Reducer<Models.State.IState> = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS_SUCCESS: return setProjects(state, action);
    default: return state;
  }
};

export const setProjects: Reducer<Models.State.IState, Models.Action.IFetchProjectSuccess> = (state, action) => {
  const { projectList } = action.payload;
  return state.set('projectList', Immutable.fromJS(projectList));
}

export default appReducer;