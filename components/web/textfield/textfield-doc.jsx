import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultTextfield from './textfield';

const Textfield = ({ value, ...props }) => {
  const [currentValue, setValue] = useState(value);
  return (
    <DefaultTextfield
      {...props}
      value={currentValue}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

Textfield.propTypes = {
  value: PropTypes.string,
};

Textfield.defaultProps = {
  value: '',
};

Textfield.sizes = DefaultTextfield.sizes;

export default Textfield;
