/* eslint-disable react/display-name */
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ClassAttributes,
  DetailedHTMLProps,
  ReactElement,
} from 'react';

type HTMLAnchorPropsType = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type HTMLButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type HTMLAnchorOrButtonType<T> = T extends true
  ? ClassAttributes<HTMLAnchorElement> & HTMLAnchorPropsType
  : ClassAttributes<HTMLButtonElement> & HTMLButtonPropsType;

interface HTMLAnchorOrButtonProps<T extends boolean> {
  isAnchor: T;
  children: React.ReactNode;
}

const HtmlAnchorOrButton = React.forwardRef(
  <T extends boolean>(
    { isAnchor, children, ...otherProps }: HTMLAnchorOrButtonProps<T>,
    ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>
  ): ReactElement & HTMLAnchorOrButtonType<T> =>
    isAnchor ? (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a ref={ref as React.Ref<HTMLAnchorElement>} {...otherProps}>
        {children}
      </a>
    ) : (
      // eslint-disable-next-line react/button-has-type
      <button ref={ref as React.Ref<HTMLButtonElement>} {...otherProps}>
        {children}
      </button>
    )
);

export default HtmlAnchorOrButton;
