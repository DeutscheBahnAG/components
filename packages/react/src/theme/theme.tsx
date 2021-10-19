import React from 'react';
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
