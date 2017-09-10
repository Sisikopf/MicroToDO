import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Details from './Details';

export default () => (
  <div>
    <h4>Header!</h4>
    <Switch>
      <Route exact path="/todo" component={List} />
      <Route path="/todo/:id" component={Details} />
    </Switch>
  </div>
);
