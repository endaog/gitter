import { ActionTypes } from './constants';
import { ActionCreator } from './models';

export const fetchProjectRequest: ActionCreator.IFetchProject = (name) => ({
  type: ActionTypes.FETCH_PROJECTS,
  payload: {
    name,
  },
});

export const fetchProjectSuccess: ActionCreator.IFetchProjectSuccess = (name) => ({
    type: ActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: {
      name,
    },
});

export const fetchProjectError: ActionCreator.IFetchProjectError = (name) => ({
    type: ActionTypes.FETCH_PROJECTS_ERROR,
    payload: {
      name
    },
});