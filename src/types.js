// @flow

'use strict';

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from './constants/ACTION_TYPE';

// NOTE: doesn't work - review!
//
// export type Action =
//     { type: FETCH_DATA }
//   | { type: FETCH_DATA_SUCCESS }
//   | { type: FETCH_DATA_ERROR }
//   ;

export type Action = { type: string, payload: Object };

export type Friend = {
  first_name: string,
  last_name: string,
  email: string,
  picture: string
};

export type Person = {
  id: string,
  first_name: string,
  last_name: string,
  gender: string,
  email: string,
  friends: Array<Friend>
};

export type NormalizedData = {
  entities: Object,
  result: Array<string>
}
