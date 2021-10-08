/* eslint-disable react/no-did-update-set-state, no-unused-vars */
import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
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
interface LinkProps extends Record<string, any> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  download?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingLabel?: string;
  iconPosition?: LinkIconPositionsType;
  style?: React.CSSProperties;
  type?: LinkTypesType;
  variant?: LinkVariantsType;
}

type LinkType = React.FunctionComponent<LinkProps>;

const Link: LinkType = ({
  children,
  className = '',
  disabled = false,
  download = false,
  href = undefined,
  icon: customIcon,
  iconPosition = 'auto',
  style = {},
  type = undefined,
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

Link.propTypes = {
  type: PropTypes.oneOf(LinkTypes),
  /** the appearance of the Link */
  variant: PropTypes.oneOf(LinkVariants),
  /** the position of the icon */
  iconPosition: PropTypes.oneOf(LinkIconPositions),
  /** when true, Link will be disabled */
  disabled: PropTypes.bool,
  /** when true the browser will try to download the target */
  download: PropTypes.bool,
  /** additional class names you want to add to the Link */
  className: PropTypes.string,
  /** inline styles */
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /** content rendered inside the Link, can be text or any element */
  children: PropTypes.node,
  /** optional icon (as `<svg>`) */
  icon: PropTypes.node,
  /** turns the Link into a regular link (anchor) */
  href: PropTypes.string,
};

// @TODO Remove no other component requires this
Link.defaultProps = {
  type: 'button',
  variant: 'primary',
  iconPosition: 'auto',
  className: '',
  style: {},
  children: undefined,
  icon: undefined,
  href: undefined,
};

export default Link;
