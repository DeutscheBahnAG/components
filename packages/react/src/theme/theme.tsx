import * as React from 'react';
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
  'EXPERIMENTAL_S_BAHN_DARK',
  'EXPERIMENTAL_S_BAHN_DARK_ALTERNATE',
  'EXPERIMENTAL_DB_GREEN_BRANDED',
  'EXPERIMENTAL_DB_GREEN_LIGHT',
  'EXPERIMENTAL_DB_GREEN_LIGHT_ALTERNATE',
  'EXPERIMENTAL_DB_PRIDE_LIGHT',
  'EXPERIMENTAL_DB_PRIDE_LIGHT_ALTERNATE',
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
