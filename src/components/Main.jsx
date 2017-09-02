import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestPage from './TestPage';
import Login from './Login';

export default () => (
  <Route path="/">
    <Switch>
      <Route path="test" component={TestPage} />
      <Route path="login" component={Login} />
    </Switch>
  </Route>
);
