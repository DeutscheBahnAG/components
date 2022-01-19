/* eslint-disable react/prop-types */
import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import {
  ActionDownload,
  NavigationLinkExternal,
  NavigationArrowForward,
  NavigationArrowBack,
} from '@db-design/react-icons';
import HtmlAnchorOrButton from '../helper/html-anchor-or-button';

export const linkIconPositions = ['none', 'auto', 'before', 'after'] as const;
export type LinkIconPositionsType = typeof linkIconPositions[number];

export const linkTypes = ['link'] as const;
export type LinkTypeType = typeof linkTypes[number];

export const linkVariants = ['primary', 'secondary', 'mixed'] as const;
export type LinkVariantsType = typeof linkVariants[number];

type HTMLButtonTypeAttributeType = ButtonHTMLAttributes<HTMLButtonElement>['type'];
export type ButtonTypesType = NonNullable<HTMLButtonTypeAttributeType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface LinkProps extends Record<string, any> {
  /** content rendered inside the Link, can be text or any element */
  children?: React.ReactNode;
  /** additional class names you want to add to the Link */
  className?: string;
  /** when true, Link will be disabled */
  disabled?: boolean;
  /** when true the browser will try to download the target */
  download?: boolean;
  fullWidth?: boolean;
  /** turns the Link into a regular link (anchor) */
  href?: string;
  /** optional icon (as `<svg>`) */
  icon?: React.ReactNode;
  loading?: boolean;
  loadingLabel?: string;
  /** the position of the icon */
  iconPosition?: LinkIconPositionsType;
  /** inline styles */
  style?: React.CSSProperties;
  type?: LinkTypeType | ButtonTypesType;
  /** the appearance of the Link */
  variant?: LinkVariantsType;
}

const Link = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>(
  (
    {
      children,
      className = '',
      disabled = false,
      download = false,
      href = undefined,
      icon: customIcon,
      iconPosition = 'auto',
      style = {},
      type = 'button',
      variant = 'primary',
      ...otherProps
    },
    ref
  ) => {
    const isLink = type === 'link' || href !== undefined;
    const isExternal = href && href.match(/^((https?):)?\/\//);
    const icon =
      customIcon ||
      (download && <ActionDownload />) ||
      (isExternal && <NavigationLinkExternal className="db-link__icon-arrow" />) ||
      (iconPosition === 'before' ? (
        <NavigationArrowBack className="db-link__icon-arrow" />
      ) : (
        <NavigationArrowForward className="db-link__icon-arrow" />
      ));

    const elementCommonProps = {
      style: { ...style },
      className: clsx(
        'db-link',
        `db-link--${variant}`,
        { 'db-link--icon': iconPosition !== 'none' },
        className
      ),
    };

    const elementSpecificProps = isLink
      ? { href }
      : { type: type as HTMLButtonTypeAttributeType, disabled };

    return (
      <>
        <HtmlAnchorOrButton
          isAnchor={isLink}
          ref={ref}
          {...elementCommonProps}
          {...elementSpecificProps}
          {...otherProps}
        >
          {(iconPosition === 'before' && icon) ||
            (iconPosition === 'auto' && (download || customIcon) && icon)}
          <span>{children}</span>
          {(iconPosition === 'after' && icon) ||
            (iconPosition === 'auto' && !download && !customIcon && href !== undefined && icon)}
        </HtmlAnchorOrButton>
        <span className="db-inline-spacer"> </span>
      </>
    );
  }
);

Link.displayName = 'Link';

export default Link;
