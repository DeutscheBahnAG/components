import React, { useState } from 'react';
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

export default Checkbox;
