import React from 'react';
import * as PropTypes from 'prop-types';

const RadioButton = ({ id, label, onChange, value, checked, disabled }) => (
  <div className="radio-button">
    <input
      id={id}
      onChange={onChange}
      value={value}
      type="radio"
      checked={checked}
      disabled={disabled}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
