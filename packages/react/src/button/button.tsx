/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState, useEffect, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import Loadingindicator, { LoadingIndicatorSizesType } from '../loadingindicator';
import { ResponsiveType } from '../shared';
import HtmlAnchorOrButton from '../helper/html-anchor-or-button';

const Screenreader: React.FC = ({ children }) => <span aria-hidden="false">{children}</span>;

// Done this way because we want them for PropTypes
export const buttonIconPositions = ['before', 'after'] as const;
export type ButtonIconPositionsType = typeof buttonIconPositions[number];

export const buttonShapes = ['default', 'square', 'round'] as const;
export type ButtonShapesType = typeof buttonShapes[number];

export const buttonSizes = ['s', 'm', 'l', 'xl'] as const;
export type ButtonSizesType = typeof buttonSizes[number];

export const linkTypes = ['link'] as const;
export type LinkTypeType = typeof linkTypes[number];

export const buttonVariants = ['primary', 'secondary', 'solid', 'hover-only'] as const;
export type ButtonVariantsType = typeof buttonVariants[number];

type HTMLButtonTypeAttributeType = ButtonHTMLAttributes<HTMLButtonElement>['type'];
export type ButtonTypesType = NonNullable<HTMLButtonTypeAttributeType>;

type CommonProps<NativeElement extends HTMLButtonElement | HTMLAnchorElement> = Omit<
  React.HTMLProps<NativeElement>,
  'shape' | 'size'
> & {
  children?: React.ReactNode;
  /** additional class names you want to add to the button */
  className?: string;
  /** when true, button will be disabled */
  disabled?: boolean;
  /** when true, button will take up all available width */
  fullWidth?: boolean;
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
  /** the appearance of the button */
  variant?: ButtonVariantsType;
};

interface ButtonElementProps extends Omit<CommonProps<HTMLButtonElement>, 'href'> {
  /** the type of the button */
  type?: ButtonTypesType;
}

interface AnchorElementProps extends CommonProps<HTMLAnchorElement> {
  /** the type of the button */
  type?: LinkTypeType;
  /** turns the Button into a regular link (anchor) */
  href?: string;
}

type ButtonProps = AnchorElementProps | ButtonElementProps;

const loadingIndicatorSizeMap: Record<ButtonSizesType, LoadingIndicatorSizesType> = {
  xl: 'm',
  l: 's',
  m: 'xs',
  s: 'xs',
};

const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      disabled = false,
      fullWidth = false,
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
    },
    ref
  ) => {
    const [minWidth, setMinWidth] = useState<string>();
    const [previousMinWidth, setPreviousMinWidth] = useState<string>();
    const [tooltip, setTooltip] = useState<string>();
    const [ariaLabel, setAriaLabel] = useState<string>();
    const buttonRef =
      ref !== null && typeof ref === 'object' && 'current' in ref
        ? ref
        : React.createRef<NonNullable<HTMLAnchorElement | HTMLButtonElement>>();

    const { href } = otherProps as typeof otherProps & { href?: string };

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

    const elementCommonProps = {
      style: { ...style, minWidth },
      className: clsx(
        'db-button',
        `db-button--${variant}`,
        responsiveClassNames(shape, 'db-button--'),
        { 'db-button--block': fullWidth },
        { [`db-button--icon-position-${iconPosition}`]: icon && shape === 'default' },
        { 'db-button--disabled': disabled },
        { 'db-button--loading': loading },
        responsiveClassNames(size, 'db-button--size-'),
        className
      ),
      title: tooltip,
      'aria-label': ariaLabel,
    };

    const elementSpecificProps = isLink
      ? { href }
      : { type: type as HTMLButtonTypeAttributeType, disabled: disabled || loading };

    return (
      <>
        <HtmlAnchorOrButton
          isAnchor={isLink}
          // @ts-expect-error forwardRef type won't match with HtmlAnchorOrButton component
          ref={buttonRef}
          {...elementCommonProps}
          {...elementSpecificProps}
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
        </HtmlAnchorOrButton>
        <span className="db-inline-spacer"> </span>
      </>
    );
  }
);

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
    if (size === 's' && (shape === 'default' || variant === 'secondary')) {
      return new Error(
        `\`size\` \`${size}\` should not be used in a ${componentName} with an Icon.`
      );
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

Button.displayName = 'Button';

export default Button;
