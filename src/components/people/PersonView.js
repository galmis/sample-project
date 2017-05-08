// @flow

import React from 'react';
import { PageHeader, Grid, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FriendsList from './FriendsList';

const PersonView = (props: Object) => {
  debugger;
  const { first_name, last_name, gender, email, friends } = props.person;
  const name = `${first_name} ${last_name}`;

  // NOTE: there are no gender icons available in bootstrap,
  // so picked tree icons..
  const _getGenderIcon = () => {
    if (gender === 'female') {
      return 'tree-conifer';
    }
    return 'tree-deciduous';
  }

  return(
    <section>
      <Grid>
        <PageHeader>
          { name }
        </PageHeader>

        <div className="item">
          <h3>
            <Glyphicon glyph={_getGenderIcon()}/> { gender }
          </h3>
          <h3>
            <Glyphicon glyph="envelope"/> { email }
          </h3>
        </div>

        <div className="item">
          <h3> {first_name + "'s friends:"} </h3>
          <FriendsList friends={friends} />
        </div>
      </Grid>
    </section>
  );
};

PersonView.propTypes = {
  person: PropTypes.object.isRequired
};

export default PersonView;
