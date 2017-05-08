// @flow

import React, { Component } from 'react';
import { PageHeader, Grid } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import type { Person } from '../../types';

const regexFilter = {
  type: 'RegexFilter',
  delay: 1000
};
const genders = {
  Female: 'Female',
  Male: 'Male'
};
const genderFilter = {
  type: 'SelectFilter',
  options: genders,
  condition: 'eq'
};

const PeopleView = (props: Object) => {

  const _onRowClick = (row: Person) => {
    // NOTE: could set people path as a constant
    props.dispatch(push(`people/${row.id}`));
  };

  const tableOptions = {
    onRowClick: _onRowClick
  };

  return (
    <section>
      <Grid>
        <PageHeader>People</PageHeader>

        <BootstrapTable data={ props.people } options={tableOptions} hover pagination>
          <TableHeaderColumn dataField='id' isKey hidden></TableHeaderColumn>

          <TableHeaderColumn dataSort dataField='first_name' filter={regexFilter}>First Name
          </TableHeaderColumn>

          <TableHeaderColumn dataSort dataField='last_name' filter={regexFilter}>Last Name
          </TableHeaderColumn>

          <TableHeaderColumn dataSort dataField='email' filter={regexFilter}>Email
          </TableHeaderColumn>

          <TableHeaderColumn dataSort dataField='gender' filter={genderFilter}>Gender
          </TableHeaderColumn>

        </BootstrapTable>
      </Grid>
    </section>
  );
};

PeopleView.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleView;
