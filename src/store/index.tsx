import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
});

export interface State {
  router: RouterState;
}

export default rootReducer;