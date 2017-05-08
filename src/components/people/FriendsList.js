// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import type { Friend } from '../../types';
import FriendItem from './FriendItem';

const FriendsList = (props: Object) => {

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
