import { ActionTypes } from './constants';
import { ActionCreator } from './models';

export const fetchProjectRequest: ActionCreator.IFetchProject = (name: string) => ({
  type: ActionTypes.FETCH_PROJECTS,
  payload: {
    name,
  },
});

export const fetchProjectSuccess: ActionCreator.IFetchProjectSuccess = (projectList) => ({
    type: ActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: {
      projectList,
    },
});

export const fetchProjectError: ActionCreator.IFetchProjectError = (error: string) => ({
    type: ActionTypes.FETCH_PROJECTS_ERROR,
    payload: {
      error
    },
});

export const fetchTweetRequest: ActionCreator.IFetchTweet = (name: string) => ({
  type: ActionTypes.FETCH_TWEETS,
  payload: {
    name,
  },
});

export const fetchTweetSuccess: ActionCreator.IFetchTweetSuccess = (tweetList) => ({
    type: ActionTypes.FETCH_TWEETS_SUCCESS,
    payload: {
      tweetList,
    },
});

export const fetchTweetError: ActionCreator.IFetchTweetError = (error: string) => ({
    type: ActionTypes.FETCH_TWEETS_ERROR,
    payload: {
      error
    },
});