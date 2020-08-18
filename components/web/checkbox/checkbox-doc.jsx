import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultCheckbox from './checkbox';

const Checkbox = ({ checked, ...props }) => {
  const [currentChecked, setChecked] = useState(checked);
  return (
    <DefaultCheckbox
      {...props}
      checked={currentChecked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
