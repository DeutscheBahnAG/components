/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export enum Themes {
  DB = 'db',
  DB_ALTERNATE = 'db-alternate',
  DB_LOUD = 'db-loud',
  DB_CONTRAST = 'db-contrast',
  DB_CONTRAST_ALTERNATE = 'db-contrast-alternate',
  S_BAHN = 's-bahn',
  S_BAHN_ALTERNATE = 's-bahn-alternate',
  S_BAHN_LOUD = 's-bahn-loud',
  GREEN_CAMPAIGN = 'green-campaign',
  GREEN_CAMPAIGN_ALTERNATE = 'green-campaign-alternate',
  GREEN_CAMPAIGN_LOUD = 'green-campaign-loud',
  PRIDE_CAMPAIGN = 'pride-campaign',
  PRIDE_CAMPAIGN_ALTERNATE = 'pride-campaign-alternate',
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
