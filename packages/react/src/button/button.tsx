/* eslint-disable react/no-did-update-set-state, no-unused-vars */
import React, { useState, useEffect, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loadingindicator, { LoadingIndicatorSizes } from '../loadingindicator';

const Screenreader: React.FunctionComponent = ({ children }) => (
  <span aria-hidden="false">{children}</span>
);
Screenreader.propTypes = { children: PropTypes.node.isRequired };

enum ButtonIconPositions {
  BEFORE = 'before',
  AFTER = 'after',
}

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
  LINK = 'link',
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SOLID = 'solid',
  HOVER_ONLY = 'hover-only',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ButtonProps extends Record<string, any> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPositions;
  loading?: boolean;
  loadingLabel?: string;
  shape?: ButtonShapes;
  size?: ButtonSizes;
  style?: React.CSSProperties;
  type?: ButtonTypes;
  variant?: ButtonVariants;
}

type ButtonType = React.FunctionComponent<ButtonProps> & {
  iconPositions: typeof ButtonIconPositions;
  shapes: typeof ButtonShapes;
  sizes: typeof ButtonSizes;
  types: typeof ButtonTypes;
  variants: typeof ButtonVariants;
};

const Button: ButtonType = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  // @NOTE The `href` property switches between a `<button>` and `<a>` element. Should be explicit.
  href,
  icon,
  iconPosition = ButtonIconPositions.BEFORE,
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

  const isLink = type === ButtonTypes.LINK || href !== undefined;
  const Element = isLink ? 'a' : 'button';
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
          { [`db-button--icon-position-${iconPosition}`]: icon && shape === ButtonShapes.DEFAULT },
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
        {iconPosition === ButtonIconPositions.BEFORE && icon}
        {shape === Button.shapes.DEFAULT ? children : <Screenreader>{children}</Screenreader>}
        {iconPosition === ButtonIconPositions.AFTER && icon}
      </Element>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

Button.iconPositions = ButtonIconPositions;
Button.shapes = ButtonShapes;
Button.sizes = ButtonSizes;
Button.types = ButtonTypes;
Button.variants = ButtonVariants;

export const validateVariantCombinations: React.Validator<ButtonVariants> = (
  { icon, shape, size, variant }: ButtonProps,
  propName: string,
  componentName: string
) => {
  const variants = Object.values(ButtonVariants);
  if (!(variant && variants.includes(variant))) {
    return new Error(`The \`variant\` must be in [${variants.join(', ')}] for a ${componentName}.`);
  }
  if (icon) {
    if (size === Button.sizes.S) {
      if (shape === Button.shapes.DEFAULT || variant === Button.variants.SECONDARY) {
        return new Error(
          `\`size\` \`${size}\` should not be used in a ${componentName} with an Icon.`
        );
      }
    }
    if (
      size === Button.sizes.XL &&
      shape !== Button.shapes.DEFAULT &&
      (variant !== Button.variants.PRIMARY || shape !== Button.shapes.ROUND)
    ) {
      return new Error(
        `The shape \`${shape}\` should not be used in a ${componentName} with size \`${size}\`.`
      );
    }
  } else if (variant === Button.variants.HOVER_ONLY) {
    return new Error(
      `Prop type recommendation: A ${componentName} as an \`${variant}\` variant should have an Icon.`
    );
  }
  if (
    (variant === Button.variants.SOLID || variant === Button.variants.HOVER_ONLY) &&
    size === Button.sizes.XL
  ) {
    return new Error(`Size \`${size}\` should not be used for a ${variant} ${componentName}.`);
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
  /** optional icon (as `<svg>`) */
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
