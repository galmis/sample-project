// @flow

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from '../../constants/ACTION_TYPE';
import type { Action } from '../../types';

function fetchData(url: string): Action {
  return {
    type: FETCH_DATA,
    payload: {
      url
    }
  };
}

function fetchDataSuccess(normalizedData: Object) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      normalizedData
    }
  }
}

function fetchDataError(errorMsg: string) {
  return {
    type: FETCH_DATA_ERROR,
    payload: {
      errorMsg
    }
  }
}

export {
  fetchData,
  fetchDataSuccess,
  fetchDataError
}
