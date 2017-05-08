// @flow

import React from 'react';
import { connect } from 'react-redux';

import PeopleView from './PeopleView';

import { getDenormalizedData } from '../../selectors/peopleSelectors';

// building props
function mapStateToProps(state: Object) {
  return {
    people: getDenormalizedData(state)
  }
}

// Pass the props to People 'dumb' component.
// React and redux wouldn't know about each other...
// So I'm using this connect function, which is like a bridge between
// react and redux.
export default connect(mapStateToProps)(PeopleView);
