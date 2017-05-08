// @flow

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { browserHistory } from 'react-router';
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import reducers from '../reducers';
import rootSaga from '../actions/sagas';
import { fetchData } from '../actions/creators/fetchDataActions';
import { getIsDataCached } from '../selectors/peopleSelectors';

const persistConfig = {
  // NOTE: storage engine can be set here, it defaults to
  // localStorage. Even though localForage is a recommended
  // storage engine for web,
  // localStorage is good enough for this task
  whitelist: [
    // persisted reducers
    reducers.peopleReducer.name
  ]
};

export default function configureStore(onStoreLoaded: (store: Object, syncedHistory: Object) => void) {
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

  // ... start persisting the store ...
  // NOTE: the app fetches data only the first time, when it's
  // loaded. While this is ok for this small task, this would
  // not be ok for an app in production, so a cache expiration
  // mechanism would need to be implemented
  persistStore(store, persistConfig, () => {
    // the callback is called when store finishes rehydrating
    onStoreLoaded(store, syncedHistory);
    if (!getIsDataCached(store.getState())) {
      store.dispatch(fetchData('/data'));
    }
  });
}
