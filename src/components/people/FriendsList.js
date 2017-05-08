// @flow

import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import type { Friend } from '../../types';
import FriendItem from './FriendItem';

const FriendsList = (props: Object) => {
  debugger;

  const _renderFriendItem = (friend: Friend, index: number) => {
    return (
      <Col xs={12} sm={6} md={4} key={index}>
        <FriendItem friend={friend}/>
      </Col>
    );
  };

  const _renderFriends = (friends: Array<Friend>) => {
    const friendsToRender = [];
    const len = friends.length;
    debugger;

    for (let i = 0; i < len; i++) {
      friendsToRender.push(_renderFriendItem(friends[i], i));
    }

    return friendsToRender;
  };

  return(
    <div>
      <Grid>
        <Row>
          { _renderFriends(props.friends) }
        </Row>
      </Grid>
    </div>
  );
};

export default FriendsList;
