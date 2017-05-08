// @flow

// redux state should only be read only,
// redux reducers should only return new state or the same state
// I'm using deep-freeze to check that current state didn't mutate
import deepFreeze from 'deep-freeze';
import reducers, { testObj } from '../index';

describe('common tests for every reducer', () => {

  it('returns the same state', () => {

    const state = {
      foo: 'foo'
    };
    deepFreeze(state);
    const action = { type: 'non existing type', payload: {} };
    deepFreeze(action);

    for (let key of Object.keys(reducers)) {
      let reducer = reducers[key];
      expect(reducer(state, action)).toBe(state);
    }
  });

  it('returns initial state', () => {
    const action = { type: 'non existing type', payload: {} };
    deepFreeze(action);

    for (let key of Object.keys(reducers)) {
      let reducer = reducers[key];
      let initialState = testObj[key].initialState;

      expect(reducer(undefined, action)).toBe(initialState);
    }
  });

});
