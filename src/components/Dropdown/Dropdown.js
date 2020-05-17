import React from 'react';
import * as PropTypes from 'prop-types';
import Select from 'react-select';

const Dropdown = ({ options, value, onChange }) => (
  <Select options={options} value={value} onChange={onChange} />
);

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: {},
};

export default Dropdown;
