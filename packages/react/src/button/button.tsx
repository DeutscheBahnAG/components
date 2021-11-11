/* eslint-disable react/no-did-update-set-state, no-unused-vars */
import React, { useState, useEffect, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import Loadingindicator, { LoadingIndicatorSizesType } from '../loadingindicator';
import { ResponsiveType } from '../shared';

const Screenreader: React.FC = ({ children }) => <span aria-hidden="false">{children}</span>;

// Done this way because we want them for PropTypes
export const buttonIconPositions = ['before', 'after'] as const;
export type ButtonIconPositionsType = typeof buttonIconPositions[number];

export const buttonShapes = ['default', 'square', 'round'] as const;
export type ButtonShapesType = typeof buttonShapes[number];

export const buttonSizes = ['s', 'm', 'l', 'xl'] as const;
export type ButtonSizesType = typeof buttonSizes[number];

export const buttonTypes = ['link', 'button', 'submit', 'reset'] as const;
export type ButtonTypesType = typeof buttonTypes[number];

export const buttonVariants = ['primary', 'secondary', 'solid', 'hover-only'] as const;
export type ButtonVariantsType = typeof buttonVariants[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ButtonProps extends Record<string, any> {
  /** content rendered inside the button, can be text or any element */
  children?: React.ReactNode;
  /** additional class names you want to add to the button */
  className?: string;
  /** when true, button will be disabled */
  disabled?: boolean;
  /** when true, button will take up all available width */
  fullWidth?: boolean;
  /** turns the Button into a regular link (anchor) */
  href?: string;
  /** optional icon (as `<svg>`) */
  icon?: React.ReactNode;
  /** the position of the icon */
  iconPosition?: ButtonIconPositionsType;
  /** whether the loading state is enabled */
  loading?: boolean;
  /** a11y label for the button while in loading state */
  loadingLabel?: string;
  /** the shape of the button */
  shape?: ButtonShapesType;
  /** the size of the button */
  size?: ResponsiveType<ButtonSizesType>;
  /** inline styles */
  style?: React.CSSProperties;
  /** the type of the button */
  type?: ButtonTypesType;
  /** the appearance of the button */
  variant?: ButtonVariantsType;
}

const loadingIndicatorSizeMap: Record<ButtonSizesType, LoadingIndicatorSizesType> = {
  xl: 'm',
  l: 's',
  m: 'xs',
  s: 'xs',
};

const Button: React.FC<ButtonProps> = ({
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

  const loadingindicatorSize =
    size instanceof Object
      ? {
          mobile: loadingIndicatorSizeMap[size.mobile],
          tablet: size.tablet && loadingIndicatorSizeMap[size.tablet],
          desktop: size.desktop && loadingIndicatorSizeMap[size.desktop],
        }
      : loadingIndicatorSizeMap[size];

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
          responsiveClassNames(shape, 'db-button--'),
          { 'db-button--block': fullWidth },
          { [`db-button--icon-position-${iconPosition}`]: icon && shape === 'default' },
          { 'db-button--disabled': disabled },
          { 'db-button--loading': loading },
          responsiveClassNames(size, 'db-button--size-'),
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
  if (!(variant && buttonVariants.includes(variant))) {
    return new Error(
      `The \`variant\` must be in [${buttonVariants.join(', ')}] for a ${componentName}.`
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

export default Button;
