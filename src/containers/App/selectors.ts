import { createSelector } from 'reselect';

import * as Models from './models';

export const app  = (state): Models.State.IState => state.get('app');
export const projectList = (state) => app(state).get('projectList');
export const tweetList = (state) => app(state).get('tweetList');