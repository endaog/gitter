import { ConnectedRouter } from 'connected-react-router/immutable';
import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { IAppProps } from 'containers/App/models';
import routes from 'routes';

const App: React.StatelessComponent<IAppProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
        { routes }
    </ConnectedRouter>
  );
};

export default DragDropContext(HTML5Backend)(App);
