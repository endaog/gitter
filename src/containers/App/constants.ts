import { keyMirror } from '../../common/utils/keyMirror';

export const ActionTypes = keyMirror(
  {
    FETCH_PROJECTS: null,
    FETCH_PROJECTS_SUCCESS: null,
    FETCH_PROJECTS_ERROR: null,
    FETCH_TWEETS: null,
    FETCH_TWEETS_SUCCESS: null,
    FETCH_TWEETS_ERROR: null,
  },
  'ProjectDetails',
);