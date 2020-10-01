import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultCheckbox, { CheckboxProps } from './checkbox';

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, ...props }) => {
  const [currentChecked, setChecked] = useState(checked);
  return (
    <DefaultCheckbox
      {...props}
      checked={currentChecked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked)}
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
