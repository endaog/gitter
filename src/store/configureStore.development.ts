import { push, routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import { Middleware, applyMiddleware, compose, createStore } from 'redux';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const router: Middleware = routerMiddleware(history);

const actionCreators = Object.assign({}, {
  push,
});

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const composeEnhancer: typeof compose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
  ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ actionCreators })
  : compose;

// export default configuration;
function configureStore(initialState: Object | void) {

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancer(
      applyMiddleware(
        batchDispatchMiddleware,
        sagaMiddleware,
        router,
        logger,
      ),
    ),
  );
  const rootTask = sagaMiddleware.run(rootSaga);
  rootTask.done.catch((error) => {
    alert(`Error occurred (saga): ${error}`); // tslint:disable-line:ban
    console.error('Error occurred in redux saga middleware.', error); // tslint:disable-line:no-console
  });

  // Hot reloading
  if (module.hot) {
    module.hot.accept('store/reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}

export default configureStore;