import { createBrowserHistory } from 'history';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { isDevelopment } from 'common/utils/isDevelopment';
import store from 'store/store';
import App from './App';

isDevelopment() && installDevTools(Immutable);

const history = createBrowserHistory();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });
}

!isDevelopment() && window.addEventListener('error', (event) => {
  console.error(`Error occurred: ${JSON.stringify(event)}.`); // tslint:disable-line:no-console
  alert(`Error occurred: ${JSON.stringify(event)}.`); // tslint:disable-line:ban

  return false;
});

!isDevelopment() && window.addEventListener('unhandledrejection', (event) => {
  console.error(`Error occurred (promise): ${JSON.stringify(event.reason)}.`); // tslint:disable-line:no-console
  alert(`Error occurred (promise): ${JSON.stringify(event.reason)}.`); // tslint:disable-line:ban
});
