import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultPasswordfield, { PasswordfieldComponent } from './passwordfield';

const Passwordfield: PasswordfieldComponent = ({ value, ...props }) => {
  const [currentValue, setValue] = useState(value);
  return (
    <DefaultPasswordfield
      {...props}
      value={currentValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
    />
  );
};

Passwordfield.propTypes = {
  value: PropTypes.string,
};

Passwordfield.defaultProps = {
  value: '',
};

export default Passwordfield;
