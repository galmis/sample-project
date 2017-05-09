// @flow

import React from 'react';
import { Media, Image, Glyphicon, Grid } from 'react-bootstrap';

const FriendsItem = (props: Object) => {
  
  const { first_name, last_name, email, picture } = props.friend;
  const name = `${first_name} ${last_name}`;

  return(
    <div className="item">
      <Grid>
        <Media>
          <Media.Left>
            <Image src={picture} width={64} height={64} />
          </Media.Left>
          <Media.Body>
            <p>
              <Glyphicon glyph="user"/> { name }
            </p>
            <p>
              <Glyphicon glyph="envelope"/> { email }
            </p>
          </Media.Body>
        </Media>
      </Grid>
    </div>
  );
};

export default FriendsItem;
