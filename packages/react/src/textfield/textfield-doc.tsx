import * as React from 'react';
import { useState } from 'react';
import DefaultTextfield, { TextfieldComponent } from './textfield';

const Textfield: React.FC<TextfieldComponent & { value: string }> = ({ value, ...props }) => {
  const [currentValue, setValue] = useState(value);
  return (
    <DefaultTextfield
      {...props}
      value={currentValue}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default Textfield;
