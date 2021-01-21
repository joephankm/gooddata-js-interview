import React, { useCallback } from "react";
import PropTypes from "prop-types";

const MonthSelect = ({ defaultValue, options, onChange, ...otherProps }) => {
  const handleChange = useCallback(event => {
    if (onChange) {
      onChange(event.target.value)
    }
  }, [onChange]);

  return (
    <select defaultValue={defaultValue} onChange={handleChange} {...otherProps}>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>{label}</option>
      ))}
    </select>
  );
};

MonthSelect.propTypes = {
  defaultValue: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })).isRequired,
  onChange: PropTypes.func,
};

MonthSelect.defaultProps = {
  defaultValue: null,
  onChange: null,
};

export default MonthSelect;
