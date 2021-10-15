/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

export const Themes = [
  'DB_BRANDED',
  'DB_LIGHT',
  'DB_LIGHT_ALTERNATE',
  'DB_DARK',
  'DB_DARK_ALTERNATE',
  'S_BAHN_BRANDED',
  'S_BAHN_LIGHT',
  'S_BAHN_LIGHT_ALTERNATE',
  'GREEN_CAMPAIGN_BRANDED',
  'GREEN_CAMPAIGN_LIGHT',
  'GREEN_CAMPAIGN_LIGHT_ALTERNATE',
  'PRIDE_LIGHT',
  'PRIDE_LIGHT_ALTERNATE',
  'DISPLAY',
] as const;
export type ThemesType = typeof Themes[number];

const ThemePropTypes = {
  /** Content to be themed */
  children: PropTypes.node.isRequired,
  /** The active theme applied to the children */
  theme: PropTypes.oneOf<ThemesType>(Themes),
  /** Additional class names you want to add to the Theme */
  className: PropTypes.string,
};

type ThemeProps = InferProps<typeof ThemePropTypes>;

type ThemeType<P> = React.FunctionComponent<P>;

const Theme: ThemeType<ThemeProps> = ({
  children,
  theme = undefined,
  className,
  ...otherProps
}: ThemeProps) => (
  <div className={clsx('db-theme', theme, className)} {...otherProps}>
    {children}
  </div>
);

Theme.propTypes = ThemePropTypes;

export default Theme;
