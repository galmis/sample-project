// @flow

import { put, call } from 'redux-saga/effects';

import { fetch } from '../../services/fetchApi';
import type { Action } from '../../types';
import { fetchDataSuccess, fetchDataError } from '../creators/fetchDataActions';
import { getNormalizedData } from '../../services/normalize';

function* fetchData(action: Action): Generator<*, *, *> {
  console.log('fetch data requested');
  try {
    const data = yield call(fetch, action.payload.url);
    if (data) {
      const normalizedData = yield call(getNormalizedData, data);
      if (normalizedData) {
        yield put(fetchDataSuccess(normalizedData));
      }
    } else {
      console.log('no data received');
      yield put(fetchDataError('No data received'));
    }
  } catch(error) {
    console.log('error thrown');
    yield put(fetchDataError(error.message));
  }
}

export {
  fetchData
}
