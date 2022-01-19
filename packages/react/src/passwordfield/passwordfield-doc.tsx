import * as React from 'react';
import { useState } from 'react';
import DefaultPasswordfield, { PasswordfieldComponent } from './passwordfield';

const Passwordfield: PasswordfieldComponent = ({ value, ...props }) => {
  const [currentValue, setValue] = useState(value);
  return (
    <DefaultPasswordfield
      {...props}
      value={currentValue}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default Passwordfield;
