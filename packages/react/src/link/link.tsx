/* eslint-disable react/no-did-update-set-state, no-unused-vars */
import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import {
  ActionDownload,
  NavigationLinkExternal,
  NavigationArrowForward,
  NavigationArrowBack,
} from '@db-design/react-icons';

export const LinkIconPositions = ['none', 'auto', 'before', 'after'] as const;
export type LinkIconPositionsType = typeof LinkIconPositions[number];

export const LinkTypes = ['link', 'button', 'submit', 'reset'] as const;
export type LinkTypesType = typeof LinkTypes[number];

export const LinkVariants = ['primary', 'secondary', 'mixed'] as const;
export type LinkVariantsType = typeof LinkVariants[number];

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
  type?: LinkTypesType;
  /** the appearance of the Link */
  variant?: LinkVariantsType;
}

const Link: React.FC<LinkProps> = ({
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
}) => {
  const LinkRef = React.createRef<HTMLAnchorElement | HTMLLinkElement>();
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

  const Element = isLink ? 'a' : 'button';

  return (
    <>
      <Element
        style={{ ...style }}
        // @ts-expect-error HTMLAnchorElement and HTMLLinkElement do not have compatible APIs, but we aren't using them on either
        ref={LinkRef}
        type={isLink ? undefined : (type as ButtonHTMLAttributes<HTMLButtonElement>['type'])}
        href={href}
        disabled={disabled}
        className={clsx(
          'db-link',
          `db-link--${variant}`,
          { 'db-link--icon': iconPosition !== 'none' },
          className
        )}
        {...otherProps}
      >
        {(iconPosition === 'before' && icon) ||
          (iconPosition === 'auto' && (download || customIcon) && icon)}
        <span>{children}</span>
        {(iconPosition === 'after' && icon) ||
          (iconPosition === 'auto' && !download && !customIcon && href !== undefined && icon)}
      </Element>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

export default Link;
