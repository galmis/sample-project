// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import Home from './app/Home';
import FriendItem from './people/FriendItem';
import FriendsList from './people/FriendsList';
import PeopleContainer from './people/PeopleContainer';
import PeopleView from './people/PeopleView';
import PersonContainer from './people/PersonContainer';
import PersonView from './people/PersonView';

const comps = [
  App,
  Home,
  FriendItem,
  FriendsList,
  PeopleContainer,
  PeopleView,
  PersonContainer,
  PersonView
];

it('renders without crashing', () => {
  comps.forEach((comp) => {
    _testRendersWithoutCrash(comp);
  });
});

function _testRendersWithoutCrash(comp: Object) {
  const div = document.createElement('div');
  ReactDOM.render(<comp />, div);
}
