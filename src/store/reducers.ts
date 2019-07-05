import { RouterState, connectRouter } from 'connected-react-router/immutable';
import { History } from 'history';
import { combineReducers } from 'redux-immutable';

import app from 'containers/App/reducer';


const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  app,
});

export interface State {
  router: RouterState;
}

export default rootReducer;
