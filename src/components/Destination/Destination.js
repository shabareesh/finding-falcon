import React from 'react';
import * as PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';

const Destination = ({ options, name, onChange, value }) => {
  return (
    <div className="destination">
      <h5 className="destination--title">{name}</h5>
      <Dropdown
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Destination.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Destination.defaultProps = {
  value: '',
};

export default Destination;
