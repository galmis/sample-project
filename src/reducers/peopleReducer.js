// @flow

import { REHYDRATE } from 'redux-persist/constants';

import { FETCH_DATA_SUCCESS } from '../constants/ACTION_TYPE';
import type { Action, NormalizedData } from '../types';
import { getIsDataCached, getNormalizedData } from '../selectors/peopleSelectors';

const initialNormalizedData = {
  result: [],
  entities: {
    dataById: {  }
  }
};

const initialState = {
  isDataCached: false,
  normalizedData: initialNormalizedData
};

export const testObj = {
  initialState
};

export default function peopleReducer(state: Object = initialState, action: Action) {
  switch(action.type) {
    case REHYDRATE: {
      // NOTE ...action.payload would do, but there could be more 'rehydratable' reducers
      // in the future
      const payload = action.payload;
      const isDataCached = getIsDataCached(payload)
        ? getIsDataCached(payload)
        : getIsDataCached(state);
      const normalizedData = getNormalizedData(payload)
        ? getNormalizedData(payload)
        : getNormalizedData(state);
      return {
        ...state,
        isDataCached,
        normalizedData
      }
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isDataCached: true
      }
    }
  }

  return state;
}
