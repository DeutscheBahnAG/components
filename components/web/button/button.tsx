/* eslint-disable react/no-did-update-set-state, no-unused-vars, react/require-default-props */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loadingindicator, { LoadingIndicatorSizes } from '../loadingindicator';

const Screenreader: React.FunctionComponent = ({ children }) => (
  <span aria-hidden="false">{children}</span>
);
Screenreader.propTypes = { children: PropTypes.node.isRequired };

enum ButtonShapes {
  DEFAULT = 'default',
  SQUARE = 'square',
  ROUND = 'round',
}

enum ButtonSizes {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

enum ButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SOLID = 'solid',
  HOVER_ONLY = 'hover-only',
}

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingLabel?: string;
  shape?: ButtonShapes;
  size?: ButtonSizes;
  style?: React.CSSProperties;
  type?: ButtonTypes;
  variant?: ButtonVariants;
}

type ButtonType<P> = React.FunctionComponent<P> & {
  shapes: typeof ButtonShapes;
  sizes: typeof ButtonSizes;
  types: typeof ButtonTypes;
  variants: typeof ButtonVariants;
};

const Button: ButtonType<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  // @NOTE The `href` property switches between a `<button>` and `<a>` element. Should be explicit.
  href,
  icon,
  loading = false,
  loadingLabel = 'Wird geladen …',
  shape = ButtonShapes.DEFAULT,
  size = ButtonSizes.L,
  style = {},
  type = ButtonTypes.BUTTON,
  variant = ButtonVariants.PRIMARY,
  ...otherProps
}) => {
  const [minWidth, setMinWidth] = useState<string>();
  const [previousMinWidth, setPreviousMinWidth] = useState<string>();
  const [tooltip, setTooltip] = useState<string>();
  const [ariaLabel, setAriaLabel] = useState<string>();
  const buttonRef = React.createRef<HTMLAnchorElement | HTMLButtonElement>();

  useEffect(() => {
    // if button changed to loading state, set its previous
    // width as minWidth, so that it keeps its size
    if (previousMinWidth && loading) {
      setMinWidth(`${previousMinWidth}px`);
      setPreviousMinWidth(undefined);
    }
    // when button leaves loading state, remove minWidth again
    else if (!previousMinWidth && !loading) {
      setMinWidth(undefined);
      const buttonEl = buttonRef.current;
      setPreviousMinWidth(buttonEl ? `${buttonEl.offsetWidth}` : undefined);
    }
  }, [loading, buttonRef, previousMinWidth]);

  const Element = href ? 'a' : 'button';
  const loadingindicatorSize = { xl: 'm', l: 's', m: 'xs', s: 'xs' }[size] as LoadingIndicatorSizes;

  useEffect(() => {
    const buttonEl = buttonRef.current;
    if (!buttonEl) {
      return;
    }
    if (shape !== Button.shapes.DEFAULT) {
      setTooltip(buttonEl.textContent || undefined);
    } else if (loading) {
      setAriaLabel(loadingLabel);
    } else {
      setTooltip(undefined);
      setAriaLabel(undefined);
    }
  }, [shape, buttonRef, loading, loadingLabel]);

  return (
    <Element
      style={{ ...style, minWidth }}
      ref={buttonRef}
      type={href ? undefined : type}
      href={href}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      title={tooltip}
      className={clsx(
        'dbx-button',
        `dbx-button--${variant}`,
        `dbx-button--${shape}`,
        { 'dbx-button--block': fullWidth },
        { 'dbx-button--disabled': disabled },
        { 'dbx-button--loading': loading },
        size && `dbx-button--${size}`,
        className
      )}
      {...otherProps}
    >
      {loading && <Loadingindicator size={loadingindicatorSize} />}
      {icon}
      {shape === Button.shapes.DEFAULT ? children : <Screenreader>{children}</Screenreader>}
    </Element>
  );
};

Button.shapes = ButtonShapes;
Button.sizes = ButtonSizes;
Button.types = ButtonTypes;
Button.variants = ButtonVariants;

interface ValidateVariantCombinationsArguments {
  icon: React.ReactNode;
  shape: ButtonShapes;
  size: ButtonSizes;
  variant: ButtonVariants;
}

export const validateVariantCombinations = (
  { icon, shape, size, variant }: ValidateVariantCombinationsArguments,
  propName: string,
  componentName: string
) => {
  const variants = Object.values(ButtonVariants);
  if (!variants.includes(variant)) {
    return new Error(`The \`variant\` must be in [${variants.join(', ')}] for a ${componentName}.`);
  }
  if (icon) {
    if (size === Button.sizes.S) {
      if (shape === Button.shapes.DEFAULT || variant === Button.variants.SECONDARY) {
        return new Error(`\`size\` \`${size}\` is not allowed in a ${componentName} with an Icon.`);
      }
    }
    if (
      size === Button.sizes.XL &&
      shape !== Button.shapes.DEFAULT &&
      (variant !== Button.variants.PRIMARY || shape !== Button.shapes.ROUND)
    ) {
      return new Error(
        `The shape \`${shape}\` is not allowed in a ${componentName} with size \`${size}\`.`
      );
    }
  } else if (variant === Button.variants.HOVER_ONLY) {
    return new Error(
      `A ${componentName} without Icon is not allowed for a \`${variant}\` variant.`
    );
  }
  if (
    (variant === Button.variants.SOLID || variant === Button.variants.HOVER_ONLY) &&
    size === Button.sizes.XL
  ) {
    return new Error(`Size \`${size}\` is not allowed for a ${variant} ${componentName}.`);
  }
  return null;
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(Button.types)),
  /** the appearance of the button */
  variant: validateVariantCombinations,
  /** the size of the button */
  size: PropTypes.oneOf(Object.values(Button.sizes)),
  /** the shape of the button */
  shape: PropTypes.oneOf(Object.values(Button.shapes)),
  /** when true, button will be disabled */
  disabled: PropTypes.bool,
  /** whether the loading state is enabled */
  loading: PropTypes.bool,
  /** additional class names you want to add to the button */
  className: PropTypes.string,
  /** when true, button will take up all available with */
  fullWidth: PropTypes.bool,
  /** a11y label for the button while in loading state */
  loadingLabel: PropTypes.string,
  /** inline styles */
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /** content rendered inside the button, can be text or any element */
  children: PropTypes.node,
  /** optional icon (as <svg>) */
  icon: PropTypes.node,
  /** turns the Button into a regular link (anchor) */
  href: PropTypes.string,
};

// @TODO Remove no other component requires this
Button.defaultProps = {
  type: Button.types.BUTTON,
  variant: Button.variants.PRIMARY,
  disabled: false,
  loading: false,
  size: Button.sizes.L,
  shape: Button.shapes.DEFAULT,
  className: '',
  fullWidth: false,
  loadingLabel: 'Wird geladen …',
  style: {},
  children: undefined,
  icon: undefined,
  href: undefined,
};

export default Button;
