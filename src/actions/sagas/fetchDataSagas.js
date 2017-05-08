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
      yield put(fetchDataSuccess(normalizedData));
    } else {
      yield put(fetchDataError('No data received'));
    }
  } catch(error) {
    yield put(fetchDataError(error.message));
  }
}

export {
  fetchData
}
