import * as React from 'react';
import { ButtonHTMLAttributes, useRef, useState } from 'react';
import { ActionVisibility, ActionVisibilityOff } from '@db-design/react-icons';
import Textfield, { TextfieldRef, TextfieldProps } from '../textfield/textfield';
import Button from '../button';

const defaultLabels = {
  showPassword: 'Passwort im Klartext anzeigen',
  concealPassword: 'Passwort verbergen',
};

export interface PasswordfieldProps extends TextfieldProps {
  /** Conceales text like ‘···’ */
  concealed?: boolean;
  /** Translations */
  labels?: {
    showPassword: string;
    concealPassword: string;
  };
  /** Props for the concealment toggle button */
  concealButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export type PasswordfieldComponent = React.FC<PasswordfieldProps>;

const Passwordfield: PasswordfieldComponent = ({
  concealed = true,
  labels,
  size,
  value,
  disabled = false,
  concealButtonProps,
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
          {...concealButtonProps}
          variant="hover-only"
          shape="round"
          size="s"
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

export default Passwordfield;
