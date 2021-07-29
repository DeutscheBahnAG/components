/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export enum Themes {
  DB_BRANDED = 'db-branded',
  DB_LIGHT = 'db-light',
  DB_LIGHT_ALTERNATE = 'db-light-alternate',
  DB_DARK = 'db-dark',
  DB_DARK_ALTERNATE = 'db-dark-alternate',
  S_BAHN_BRANDED = 's-bahn-branded',
  S_BAHN_LIGHT = 's-bahn-light',
  S_BAHN_LIGHT_ALTERNATE = 's-bahn-light-alternate',
  GREEN_CAMPAIGN_BRANDED = 'green-campaign-branded',
  GREEN_CAMPAIGN_LIGHT = 'green-campaign-light',
  GREEN_CAMPAIGN_LIGHT_ALTERNATE = 'green-campaign-light-alternate',
  PRIDE_CAMPAIGN_LIGHT = 'pride-campaign-light',
  PRIDE_CAMPAIGN_LIGHT_ALTERNATE = 'pride-campaign-light-alternate',
  DISPLAY = 'display',
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
  <div className={`db-theme db-theme--${theme}`} {...otherProps}>
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
