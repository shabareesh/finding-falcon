import React from 'react';
import * as PropTypes from 'prop-types';
import RadioButton from '../RadioButton/RadioButton';

const RadioGroup = ({ options }) => (
  <div className="radio-group">
    {options.map(option => (
      <RadioButton key={option.name} />
    ))}
  </div>
);

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
};

export default RadioGroup;
