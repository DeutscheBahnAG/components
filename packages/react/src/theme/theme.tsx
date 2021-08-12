/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export enum Themes {
  DB_BRANDED = 'DB_BRANDED',
  DB_LIGHT = 'DB_LIGHT',
  DB_LIGHT_ALTERNATE = 'DB_LIGHT_ALTERNATE',
  DB_DARK = 'DB_DARK',
  DB_DARK_ALTERNATE = 'DB_DARK_ALTERNATE',
  S_BAHN_BRANDED = 'S_BAHN_BRANDED',
  S_BAHN_LIGHT = 'S_BAHN_LIGHT',
  S_BAHN_LIGHT_ALTERNATE = 'S_BAHN_LIGHT_ALTERNATE',
  GREEN_CAMPAIGN_BRANDED = 'GREEN_CAMPAIGN_BRANDED',
  GREEN_CAMPAIGN_LIGHT = 'GREEN_CAMPAIGN_LIGHT',
  GREEN_CAMPAIGN_LIGHT_ALTERNATE = 'GREEN_CAMPAIGN_LIGHT_ALTERNATE',
  PRIDE_CAMPAIGN_LIGHT = 'PRIDE_CAMPAIGN_LIGHT',
  PRIDE_CAMPAIGN_LIGHT_ALTERNATE = 'PRIDE_CAMPAIGN_LIGHT_ALTERNATE',
  DISPLAY = 'DISPLAY',
}

interface ThemeProps {
  children: React.ReactNode | React.ReactNode[];
  theme?: Themes;
  className?: string;
}

type ThemeType<P> = React.FunctionComponent<P> & {
  themes: typeof Themes;
};

const Theme: ThemeType<ThemeProps> = ({
  children,
  theme = undefined,
  ...otherProps
}: ThemeProps) => (
  <div className={`db-theme ${theme}`} {...otherProps}>
    {children}
  </div>
);

Theme.themes = Themes;

Theme.propTypes = {
  /** Content to be themed */
  children: PropTypes.node.isRequired,
  /** The active theme applied to the children */
  theme: PropTypes.oneOf(Object.values(Themes)),
  /** Additional class names you want to add to the Theme */
  className: PropTypes.string,
};

export default Theme;
