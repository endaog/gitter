
import { ActionTypes } from '../constants';
import * as Models from '../models';
import {  Project } from 'models';

export const action: Models.Action.IFetchProject = {
    type: ActionTypes.FETCH_PROJECTS,
    payload: {
      name: 'javascrpt',
    },
  };

  export const project = {
    id: '1',
    name: 'javascrpt',
    description: 'test' 
  } as Project;
  