// @flow

// NOTE: selectors are like interface between components/sagas and redux state.
// If I decided to change my state shape, I would only need to refactor the selectors.
// Components/sagas shouldn't care about redux state shape...

import { createSelector } from 'reselect';

import type { Person, NormalizedData } from '../types';
import { getDenormalizedDataArray } from '../services/normalize';

// return peopleReducer if global state is passed (called from a component, saga, etc.)
// return state if called from the reducer function
function getPeopleState(state: Object): Object {
  return state.peopleReducer ? state.peopleReducer : state;
}

function getIsDataCached(state: Object): boolean {
  return getPeopleState(state).isDataCached;
}

function getNormalizedData(state: Object): NormalizedData {
  return getPeopleState(state).normalizedData;
}

// memoized selector, it is not recomputed unless one of its arguments change
const getDenormalizedData = createSelector(getNormalizedData, normalizedData => {
  const denormalizedData = getDenormalizedDataArray(normalizedData);
  return denormalizedData;
});

function getEntities(state: Object): Object {
  return getNormalizedData(state).entities;
}

function getPeopleById(state: Object): Object {
  return getEntities(state).dataById;
}

function getPerson(state: Object, id: string): Person {
  debugger;
  const person = getPeopleById(state)[id];
  if (person) {
    return person;
  }
  // return default
  return {
    id,
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    friends: []
  };
}

export {
  getPeopleState,
  getNormalizedData,
  getDenormalizedData,
  getIsDataCached,
  getEntities,
  getPeopleById,
  getPerson
}
