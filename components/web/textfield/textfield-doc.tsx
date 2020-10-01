import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultTextfield, { TextfieldProps, TextfieldExport } from './textfield';

const Textfield: React.FC<TextfieldProps> = ({ value, ...props }) => {
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

(Textfield as TextfieldExport).sizes = (DefaultTextfield as TextfieldExport).sizes;

export default Textfield;
