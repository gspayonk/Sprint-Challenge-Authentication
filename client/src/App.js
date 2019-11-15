import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/route';

import LoginForm from './components/login-form';
import Jokes from './components/jokes';

const App = () => (
  <>
    <Switch>
      <Route path = '/' component = {LoginForm} />
      <PrivateRoute path = '/jokes' component = {Jokes} />
    </Switch>
  </>
);
export default App;