import React from 'react';
import * as PropTypes from 'prop-types';

import './pageHeader.scss';

const PageHeader = ({ title }) => (
  <header className="page-header">
    <h2 className="page-header--title">{title}</h2>
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
