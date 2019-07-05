import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import { Middleware, applyMiddleware, createStore } from 'redux';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const router: Middleware = routerMiddleware(history);

function configureStore(initialState: Object | void) {
  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(
      batchDispatchMiddleware,
      sagaMiddleware,
      router,
    ),
  );

  const rootTask = sagaMiddleware.run(rootSaga);
  rootTask.done.catch((error) => {
    alert(`Error occurred (saga): ${error}`); // tslint:disable-line:ban
    console.error('Error occurred in redux saga middleware.', error); // tslint:disable-line:no-console
  });

  return store;
}

export default configureStore;
