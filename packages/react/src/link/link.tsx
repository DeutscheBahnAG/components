/* eslint-disable react/no-did-update-set-state, no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  ActionDownload,
  NavigationLinkExternal,
  NavigationArrowForward,
  NavigationArrowBack,
} from '@db-design/react-icons';

enum LinkIconPositions {
  NONE = 'none',
  AUTO = 'auto',
  BEFORE = 'before',
  AFTER = 'after',
}

enum LinkTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum LinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  MIXED = 'mixed',
}

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
  iconPosition?: LinkIconPositions;
  style?: React.CSSProperties;
  type?: LinkTypes;
  variant?: LinkVariants;
}

type LinkType = React.FunctionComponent<LinkProps> & {
  iconPositions: typeof LinkIconPositions;
  types: typeof LinkTypes;
  variants: typeof LinkVariants;
};

const Link: LinkType = ({
  children,
  className = '',
  disabled = false,
  download = false,
  href = undefined,
  icon: customIcon,
  iconPosition = LinkIconPositions.AUTO,
  style = {},
  type = undefined,
  variant = LinkVariants.PRIMARY,
  ...otherProps
}) => {
  const LinkRef = React.createRef<HTMLAnchorElement | HTMLLinkElement>();
  const isExternal = href && href.match(/^((https?):)?\/\//);
  const icon =
    customIcon ||
    (download && <ActionDownload />) ||
    (isExternal && <NavigationLinkExternal className="db-link__icon-arrow" />) ||
    (iconPosition === LinkIconPositions.BEFORE ? (
      <NavigationArrowBack className="db-link__icon-arrow" />
    ) : (
      <NavigationArrowForward className="db-link__icon-arrow" />
    ));

  const Element = href !== undefined ? 'a' : 'button';

  return (
    <>
      <Element
        style={{ ...style }}
        // @ts-expect-error HTMLAnchorElement and HTMLLinkElement do not have compatible APIs, but we aren't using them on either
        ref={LinkRef}
        type={href !== undefined ? undefined : type}
        href={href}
        disabled={disabled}
        className={clsx(
          'db-link',
          `db-link--${variant}`,
          { 'db-link--icon': iconPosition !== LinkIconPositions.NONE },
          className
        )}
        {...otherProps}
      >
        {(iconPosition === LinkIconPositions.BEFORE && icon) ||
          (iconPosition === LinkIconPositions.AUTO && (download || customIcon) && icon)}
        <span>{children}</span>
        {(iconPosition === LinkIconPositions.AFTER && icon) ||
          (iconPosition === LinkIconPositions.AUTO &&
            !download &&
            !customIcon &&
            href !== undefined &&
            icon)}
      </Element>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

Link.iconPositions = LinkIconPositions;
Link.types = LinkTypes;
Link.variants = LinkVariants;

Link.propTypes = {
  type: PropTypes.oneOf(Object.values(Link.types)),
  /** the appearance of the Link */
  variant: PropTypes.oneOf(Object.values(Link.variants)),
  /** the position of the icon */
  iconPosition: PropTypes.oneOf(Object.values(Link.iconPositions)),
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
  type: Link.types.BUTTON,
  variant: Link.variants.PRIMARY,
  iconPosition: Link.iconPositions.AUTO,
  className: '',
  style: {},
  children: undefined,
  icon: undefined,
  href: undefined,
};

export default Link;
