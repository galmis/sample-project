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

// Pass the props to PeopleView 'dumb' component. Normally, I would also pass bound
// action creators using bindActionCreators helper function, but none of my components
// really need to dispatch any actions...

// React and redux wouldn't know about each other...
// So I'm using this connect function, which is like a bridge between
// react and redux.
export default connect(mapStateToProps)(PeopleView);
