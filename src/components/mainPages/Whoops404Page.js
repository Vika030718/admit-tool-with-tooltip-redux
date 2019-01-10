import React from 'react';
import PropTypes from 'prop-types';
import {PageTemplate} from './../PageTemplate';

export const Whoops404Page = ({location}) =>
  <PageTemplate>
    <div className="whoops-404">
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  </PageTemplate>;

Whoops404Page.propTypes = {
  location: PropTypes.object,
};