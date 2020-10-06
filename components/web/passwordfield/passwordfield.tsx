/* eslint-disable react/require-default-props */
import React, { useRef, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { ActionVisibility, ActionVisibilityOff } from '@bahn-x/dbx-icons';
import Textfield, { TextfieldSize, TextfieldRef } from '../textfield/textfield';
import Button from '../button';

const defaultLabels = {
  showPassword: 'Passwort im Klartext anzeigen',
  concealPassword: 'Passwort verbergen',
};

const passwordfieldPropTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...Textfield.propTypes,
  /** Conceales text like ‘···’ */
  concealed: PropTypes.bool,
  /** Translations */
  labels: PropTypes.shape({
    showPassword: PropTypes.string.isRequired,
    concealPassword: PropTypes.string.isRequired,
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PasswordfieldProps = InferProps<typeof passwordfieldPropTypes> & Record<string, any>;

export type PasswordfieldComponent = React.FunctionComponent<PasswordfieldProps> & {
  sizes: typeof TextfieldSize;
};

const Passwordfield: PasswordfieldComponent = ({
  concealed = true,
  labels,
  size,
  value,
  disabled,
  ...otherProps
}) => {
  const { showPassword, concealPassword } = labels ?? defaultLabels;
  const [isConcealed, setConcealed] = useState(concealed);
  const fieldRef = useRef<TextfieldRef>(null);

  const toggleConcealed = () => {
    if (fieldRef.current) {
      const { selectionStart, selectionEnd } = fieldRef.current;
      setConcealed(!isConcealed);
      requestAnimationFrame(() => {
        if (typeof selectionStart === 'number' && typeof selectionEnd === 'number') {
          fieldRef.current?.setSelectionRange(selectionStart, selectionEnd);
        }
      });
    } else {
      setConcealed(!isConcealed);
    }
  };

  return (
    <Textfield
      {...otherProps}
      ref={fieldRef}
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

Passwordfield.sizes = TextfieldSize;

Passwordfield.propTypes = passwordfieldPropTypes;

export default Passwordfield;
