import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Todo from './todo/Todo';
import Login from './Login';
import Register from './Register';

export default () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/todo" />) /* insert here */} />
    <Route path="/todo" component={Todo /* auth if */} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
);
