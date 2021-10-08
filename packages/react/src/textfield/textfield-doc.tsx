import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultTextfield, { TextfieldProps } from './textfield';

const Textfield: React.FunctionComponent<TextfieldProps> = ({ value, ...props }) => {
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

export default Textfield;
