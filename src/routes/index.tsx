import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppScreen from 'containers/App';

const routes = (
  <>
    <Switch>
     
      <Route path={`/`} component={AppScreen} />
     
    </Switch>
  </>
);

export default routes;
