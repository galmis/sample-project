// @flow

import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
 } from '../../../constants/ACTION_TYPE';
import { fetchData } from '../fetchDataSagas';
import type { Action } from '../../../types';
import { fetch } from '../../../services/fetchApi';
import { put, call } from 'redux-saga/effects';

describe('fetchDataSagas tests', () => {

  it('tests fetchData success', () => {
    const url = '/someUrl';
    const action: Action = {
      type: 'any action',
      payload: {
        url
      }
    }
    const gen = fetchData(action);

    expect(gen.next().value).toEqual(call(fetch, url));

    const data = 'some data';
    expect(gen.next(data).value).toEqual(put({
      type: FETCH_DATA_SUCCESS,
      payload: {
        data
      }
    }));
    expect(gen.next().done).toEqual(true);
  });

  it('tests fetchData error - no data received', () => {
    const url = '/someUrl';
    const action: Action = {
      type: 'any action',
      payload: {
        url
      }
    }
    const gen = fetchData(action);

    expect(gen.next().value).toEqual(call(fetch, url));
    expect(gen.next().value).toEqual(put({
      type: FETCH_DATA_ERROR,
      payload: {
        errorMsg: 'No data received'
      }
    }));
    expect(gen.next().done).toEqual(true);
  });

});
