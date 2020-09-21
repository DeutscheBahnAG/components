import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActionVisibility, ActionVisibilityOff } from '@bahn-x/dbx-icons';
import Textfield from '../textfield';
import Button from '../button';

const Passwordfield = ({
  concealed,
  labels: { showPassword, concealPassword },
  size,
  value,
  disabled,
  ...otherProps
}) => {
  const [isConcealed, setConcealed] = useState(concealed);

  const toggleConcealed = () => setConcealed(!isConcealed);

  return (
    <Textfield
      {...otherProps}
      disabled={disabled}
      size={size}
      value={value}
      type={isConcealed ? 'password' : 'text'}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect="false"
      spellCheck={false}
      suffix={
        <Button
          variant={Button.variants.HOVER_ONLY}
          shape={Button.shapes.ROUND}
          size={Button.sizes.S}
          disabled={disabled || !value}
          icon={isConcealed ? <ActionVisibility /> : <ActionVisibilityOff />}
          onClick={toggleConcealed}
        >
          {isConcealed ? showPassword : concealPassword}
        </Button>
      }
    />
  );
};

Passwordfield.sizes = Textfield.sizes;

Passwordfield.propTypes = {
  ...Textfield.propTypes,
  /** Conceales text like ‘···’ */
  concealed: PropTypes.bool,
  /** Translations */
  labels: PropTypes.shape({
    showPassword: PropTypes.string.isRequired,
    concealPassword: PropTypes.string.isRequired,
  }),
};

Passwordfield.defaultProps = {
  concealed: true,
  labels: { showPassword: 'Passwort im Klartext anzeigen', concealPassword: 'Passwort verbergen' },
};

export default Passwordfield;
