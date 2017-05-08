// @flow

import peopleReducer, { testObj as peopleTestObj } from './peopleReducer';

export default {
  peopleReducer
}

export const testObj = {
  [peopleReducer.name]: peopleTestObj,
}
