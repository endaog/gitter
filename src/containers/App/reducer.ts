import Immutable from 'immutable';

import { Reducer } from 'models';
import { ActionTypes } from './constants';
import * as Models from './models';

export const appInitialState: Models.State.IState = Immutable.Map({
  projectList: Immutable.Map() as Models.State.IProjectsMap,
  tweetList: Immutable.Map() as Models.State.ITweetsMap,
});

const appReducer: Reducer<Models.State.IState> = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS_SUCCESS: return setProjects(state, action);
    case ActionTypes.FETCH_TWEETS_SUCCESS: return setTweets(state, action);
    default: return state;
  }
};

export const setProjects: Reducer<Models.State.IState, Models.Action.IFetchProjectSuccess> = (state, action) => {
  const { projectList } = action.payload;
  return state.set('projectList', Immutable.fromJS(projectList));
}

export const setTweets: Reducer<Models.State.IState, Models.Action.IFetchTweetSuccess> = (state, action) => {
  const { tweetList } = action.payload;
  console.log('reducer', tweetList);
  return state.set('tweetList', Immutable.fromJS(tweetList));
}

export default appReducer;