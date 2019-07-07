import { expect } from 'chai';

import * as actions from './actions';
import { ActionTypes } from './constants';

describe('app actions', () => {
  it('appscreen', () => {
    const query = 'javascript';

    const expectedAction = {
      type: ActionTypes.FETCH_PROJECTS,
      payload: {
        name: query,
      },
    };

    expect(actions.fetchProjectRequest(query)).to.deep.equal(expectedAction);
  });
});