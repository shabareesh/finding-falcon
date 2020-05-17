import React from 'react';
import * as PropTypes from 'prop-types';

import './subHeader.scss';

const SubHeader = ({ title }) => (
  <div className="sub-header">
    <h4 className="sub-header--title">{title}</h4>
  </div>
);

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeader;
