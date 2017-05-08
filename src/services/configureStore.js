// @flow

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { browserHistory } from 'react-router';
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist'

import reducers from '../reducers';
import rootSaga from '../actions/sagas';
import { fetchData } from '../actions/creators/fetchDataActions';
import { getIsDataCached } from '../selectors/peopleSelectors';

export default function configureStore(onConfigured: (store: Object, syncedHistory: Object) => void) {
  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });
  // create redux store middleware
  const sagaMiddleware = createSagaMiddleware();
  const routingMiddleware = routerMiddleware(browserHistory);
  const storeEnhancer = applyMiddleware(sagaMiddleware, routingMiddleware);
  // create redux store
  const store = createStore(rootReducer, storeEnhancer);
  sagaMiddleware.run(rootSaga);
  const syncedHistory = syncHistoryWithStore(browserHistory, store);

  onConfigured(store, syncedHistory);
  _persistStore(store);
}

function _persistStore(store: Object) {
  const persistConfig = {
    whitelist: [
      // persisted reducers
      reducers.peopleReducer.name
    ]
  };

  persistStore(store, persistConfig, () => {
    debugger;
    // the callback is called when store finishes rehydrating
    if (!getIsDataCached(store.getState())) {
      store.dispatch(fetchData('/data'));
    }
  });
}
