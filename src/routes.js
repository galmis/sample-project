// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import Home from './components/app/Home';
import PersonContainer from './components/people/PersonContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='people/:id' component={PersonContainer} />
  </Route>
);
