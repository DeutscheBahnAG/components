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

type CommonProps<NativeElement extends HTMLButtonElement | HTMLAnchorElement> =
  React.HTMLProps<NativeElement> & {
    /** content rendered inside the Link, can be text or any element */
    children?: React.ReactNode;
    /** additional class names you want to add to the Link */
    className?: string;
    /** when true, Link will be disabled */
    disabled?: boolean;
    /** when true the browser will try to download the target */
    download?: boolean;
    fullWidth?: boolean;
    /** optional icon (as `<svg>`) */
    icon?: React.ReactNode;
    loading?: boolean;
    loadingLabel?: string;
    /** the position of the icon */
    iconPosition?: LinkIconPositionsType;
    /** inline styles */
    style?: React.CSSProperties;
    /** the appearance of the Link */
    variant?: LinkVariantsType;
  };

interface ButtonElementProps extends Omit<CommonProps<HTMLButtonElement>, 'href'> {
  /** the type of the link */
  type?: ButtonTypesType;
}

interface AnchorElementProps extends CommonProps<HTMLAnchorElement> {
  /** the type of the link */
  type?: LinkTypeType;
  /** turns the Link into a regular link (anchor) */
  href?: string;
}

type LinkProps = AnchorElementProps | ButtonElementProps;

const Link = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>(
  (
    {
      children,
      className = '',
      disabled = false,
      download = false,
      icon: customIcon,
      iconPosition = 'auto',
      style = {},
      type = 'button',
      variant = 'primary',
      ...otherProps
    },
    ref
  ) => {
    const { href } = otherProps as typeof otherProps & { href?: string };
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
          // @ts-expect-error forwardRef type won't match with HtmlAnchorOrButton component
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
