// @flow

import React from 'react';
import { connect } from 'react-redux';

import PersonView from './PersonView';
import {
  getPerson
} from '../../selectors/peopleSelectors';

function mapStateToProps(state: Object, routerProps: Object) {
  const id = routerProps.params.id;
  debugger;
  return {
    person: getPerson(state, id)
  }
}

export default connect(mapStateToProps)(PersonView);
