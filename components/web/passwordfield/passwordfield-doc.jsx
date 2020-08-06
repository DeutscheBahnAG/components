import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultPasswordfield from './passwordfield';

const Passwordfield = ({ value, ...props }) => {
  const [currentValue, setValue] = useState(value);
  return (
    <DefaultPasswordfield
      {...props}
      value={currentValue}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

Passwordfield.propTypes = {
  value: PropTypes.string,
};

Passwordfield.defaultProps = {
  value: '',
};

Passwordfield.sizes = DefaultPasswordfield.sizes;

export default Passwordfield;
