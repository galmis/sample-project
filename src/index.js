// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';

import configureStore from './services/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './styles/index.css';

configureStore( (store: Object, syncedHistory: Object) => {
  // render react app when store is configured
  ReactDOM.render(
    <Provider store={store}>
      <Router history={syncedHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
  );
});
