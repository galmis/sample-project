// @flow

import deepFreeze from 'deep-freeze';
import peopleReducer, {testObj} from '../peopleReducer';
import { FETCH_DATA_SUCCESS } from '../../constants/ACTION_TYPE';

describe('peopleReducer specific tests', () => {

  it('returns new FETCH_DATA_SUCCESS state', () => {

    const newData = 'new data';
    const action = {
      type: FETCH_DATA_SUCCESS,
      payload: {
        data: newData
      }
    };
    const oldState = {
      data: 'old data'
    };

    deepFreeze(action);
    deepFreeze(oldState);

    const newState = {
      data: newData,
    }

    expect(peopleReducer(oldState, action)).toEqual(newState);
  });

});
