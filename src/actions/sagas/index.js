// @flow

import { takeLatest } from 'redux-saga/effects';

import { fetchData } from './fetchDataSagas';
import { FETCH_DATA } from '../../constants/ACTION_TYPE';

export default function* rootSaga(): Generator<*, void, *> {
  yield [
    // listen for when FETCH_DATA action is dispatched and call fetchData saga
    takeLatest(FETCH_DATA, fetchData),
  ];
}
