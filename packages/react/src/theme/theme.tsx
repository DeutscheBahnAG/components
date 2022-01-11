import React from 'react';
import clsx from 'clsx';

export const themes = [
  'DB_BRANDED',
  'DB_LIGHT',
  'DB_LIGHT_ALTERNATE',
  'DB_DARK',
  'DB_DARK_ALTERNATE',
  'DISPLAY',
  'EXPERIMENTAL_S_BAHN_BRANDED',
  'EXPERIMENTAL_S_BAHN_LIGHT',
  'EXPERIMENTAL_S_BAHN_LIGHT_ALTERNATE',
  'EXPERIMENTAL_GREEN_CAMPAIGN_BRANDED',
  'EXPERIMENTAL_GREEN_CAMPAIGN_LIGHT',
  'EXPERIMENTAL_GREEN_CAMPAIGN_LIGHT_ALTERNATE',
  'EXPERIMENTAL_PRIDE_LIGHT',
  'EXPERIMENTAL_PRIDE_LIGHT_ALTERNATE',
] as const;
export type ThemesType = typeof themes[number];

export interface ThemeProps {
  /** Content to be themed */
  children: React.ReactNode;
  /** The active theme applied to the children */
  theme: ThemesType;
  /** Additional class names you want to add to the Theme */
  className?: string;
}

const Theme: React.FC<ThemeProps> = ({ children, theme = undefined, className, ...otherProps }) => (
  <div className={clsx('db-theme', theme, className)} {...otherProps}>
    {children}
  </div>
);

export default Theme;
