import { expect } from 'chai';
import * as Immutable from 'immutable';
import { batchActions } from 'redux-batched-actions';
import { call, put } from 'redux-saga/effects';

import * as api from 'common/services/api';
import { fetchProjects } from './fetchProjects';
import * as mock from './fetchProjectData.mock';
import * as AppActions from 'containers/App/actions';

describe('sagas : fetchProjects', () => {

  it('should fetch projects data correctly ', () => {
    const fetchGeneratorObject = fetchProjects(mock.action);
    let nextFetch = fetchGeneratorObject.next();
    
    expect(nextFetch.value).to.deep.equal(
      call(api.getProjects, mock.action.payload.name),
    );

    nextFetch = fetchGeneratorObject.next(mock.project);

  });
});
