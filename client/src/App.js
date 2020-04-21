import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login';
import Jokes from './components/jokes';
import Register from './components/register';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (

    <div className = 'App'>
      <h1>Jokes</h1>

      <BrowserRouter>
        <PrivateRoute exact path = '/' component = {Jokes} />
        <Route path = '/login' component = {Login} />
        <Route path = '/register' component = {Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;