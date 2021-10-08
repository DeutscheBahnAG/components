/* eslint-disable react/no-did-update-set-state, no-unused-vars */
import React, { useState, useEffect, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loadingindicator, { LoadingIndicatorSizesType } from '../loadingindicator';

const Screenreader: React.FunctionComponent = ({ children }) => (
  <span aria-hidden="false">{children}</span>
);
Screenreader.propTypes = { children: PropTypes.node.isRequired };

// Done this way because we want them for PropTypes
export const ButtonIconPositions = ['before', 'after'] as const;
export type ButtonIconPositionsType = typeof ButtonIconPositions[number];

export const ButtonShapes = ['default', 'square', 'round'] as const;
export type ButtonShapesType = typeof ButtonShapes[number];

export const ButtonSizes = ['s', 'm', 'l', 'xl'] as const;
export type ButtonSizesType = typeof ButtonSizes[number];

export const ButtonTypes = ['link', 'button', 'submit', 'reset'] as const;
export type ButtonTypesType = typeof ButtonTypes[number];

export const ButtonVariants = ['primary', 'secondary', 'solid', 'hover-only'] as const;
export type ButtonVariantsType = typeof ButtonVariants[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ButtonProps extends Record<string, any> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPositionsType;
  loading?: boolean;
  loadingLabel?: string;
  shape?: ButtonShapesType;
  size?: ButtonSizesType;
  style?: React.CSSProperties;
  type?: ButtonTypesType;
  variant?: ButtonVariantsType;
}

const loadingIndicatorSizeMap: Record<ButtonSizesType, LoadingIndicatorSizesType> = {
  xl: 'm',
  l: 's',
  m: 'xs',
  s: 'xs',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  // @NOTE The `href` property switches between a `<button>` and `<a>` element. Should be explicit.
  href,
  icon,
  iconPosition = 'before',
  loading = false,
  loadingLabel = 'Wird geladen …',
  shape = 'default',
  size = 'l',
  style = {},
  type = 'button',
  variant = 'primary',
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

  const isLink = type === 'link' || href !== undefined;
  const Element = isLink ? 'a' : 'button';

  const loadingindicatorSize = loadingIndicatorSizeMap[size];

  useEffect(() => {
    const buttonEl = buttonRef.current;
    if (!buttonEl) {
      return;
    }
    if (shape !== 'default') {
      setTooltip(buttonEl.textContent || undefined);
    } else if (loading) {
      setAriaLabel(loadingLabel);
    } else {
      setTooltip(undefined);
      setAriaLabel(undefined);
    }
  }, [shape, buttonRef, loading, loadingLabel]);

  return (
    <>
      <Element
        style={{ ...style, minWidth }}
        // @ts-expect-error HTMLAnchorElement and HTMLButtonElement do not have compatible APIs, but we aren't using them on either
        ref={buttonRef}
        type={isLink ? undefined : (type as ButtonHTMLAttributes<HTMLButtonElement>['type'])}
        href={href}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        title={tooltip}
        className={clsx(
          'db-button',
          `db-button--${variant}`,
          `db-button--${shape}`,
          { 'db-button--block': fullWidth },
          { [`db-button--icon-position-${iconPosition}`]: icon && shape === 'default' },
          { 'db-button--disabled': disabled },
          { 'db-button--loading': loading },
          size && `db-button--size-${size}`,
          className
        )}
        {...otherProps}
      >
        {loading && (
          <span className="db-button__loadingindicator">
            <Loadingindicator size={loadingindicatorSize} />
          </span>
        )}
        {iconPosition === 'before' && icon}
        {shape === 'default' ? children : <Screenreader>{children}</Screenreader>}
        {iconPosition === 'after' && icon}
      </Element>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

export const validateVariantCombinations: React.Validator<ButtonVariantsType> = (
  { icon, shape, size, variant }: ButtonProps,
  propName: string,
  componentName: string
) => {
  if (!(variant && ButtonVariants.includes(variant))) {
    return new Error(
      `The \`variant\` must be in [${ButtonVariants.join(', ')}] for a ${componentName}.`
    );
  }
  if (icon) {
    if (size === 's') {
      if (shape === 'default' || variant === 'secondary') {
        return new Error(
          `\`size\` \`${size}\` should not be used in a ${componentName} with an Icon.`
        );
      }
    }
    if (size === 'xl' && shape !== 'default' && (variant !== 'primary' || shape !== 'round')) {
      return new Error(
        `The shape \`${shape}\` should not be used in a ${componentName} with size \`${size}\`.`
      );
    }
  } else if (variant === 'hover-only') {
    return new Error(
      `Prop type recommendation: A ${componentName} as an \`${variant}\` variant should have an Icon.`
    );
  }
  if ((variant === 'solid' || variant === 'hover-only') && size === 'xl') {
    return new Error(`Size \`${size}\` should not be used for a ${variant} ${componentName}.`);
  }
  return null;
};

Button.propTypes = {
  /** the type of the button */
  type: PropTypes.oneOf(ButtonTypes),
  /** the appearance of the button */
  variant: validateVariantCombinations,
  /** the size of the button */
  size: PropTypes.oneOf(ButtonSizes),
  /** the shape of the button */
  shape: PropTypes.oneOf(ButtonShapes),
  /** the position of the icon */
  iconPosition: PropTypes.oneOf(ButtonIconPositions),
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
  /** optional icon (as `<svg>`) */
  icon: PropTypes.node,
  /** turns the Button into a regular link (anchor) */
  href: PropTypes.string,
};

// @TODO Remove no other component requires this
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  disabled: false,
  loading: false,
  size: 'l',
  shape: 'default',
  className: '',
  fullWidth: false,
  loadingLabel: 'Wird geladen …',
  style: {},
  children: undefined,
  icon: undefined,
  href: undefined,
};

export default Button;
