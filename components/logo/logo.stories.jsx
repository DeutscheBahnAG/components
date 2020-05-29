import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Logo from './logo';
import readme from './README.md';

storiesOf('Components / DB Logo', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Logo />)
  .add('Different alt text', () => <Logo>DB Regio</Logo>)
  .add('X-small size', () => <Logo size={Logo.sizes.XS} />)
  .add('Small size', () => <Logo size={Logo.sizes.S} />)
  .add('Medium size', () => <Logo size={Logo.sizes.M} />)
  .add('Large size', () => <Logo size={Logo.sizes.L} />)
  .add('X-large size', () => <Logo size={Logo.sizes.XL} />)
  .add('XX-large size', () => <Logo size={Logo.sizes.XXL} />)
  .add('Variant: Default (transparent background)', () => (
    <div style={{ backgroundColor: tokens.palette.coolgray100, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.DEFAULT} />
    </div>
  ))
  .add('Variant: Filled (white background)', () => (
    <div style={{ backgroundColor: tokens.palette.coolgray600, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.FILLED} />
    </div>
  ))
  .add('Variant: Outlined (white background and border)', () => (
    <div style={{ backgroundColor: tokens.palette.dbrot, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.OUTLINED} />
    </div>
  ))
  .add('Variant: White (transparent background)', () => (
    <div style={{ backgroundColor: tokens.palette.burgundy700, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.WHITE} />
    </div>
  ))
  .add('Linked', () => (
    <a href="#xyz" style={{ outline: 0 }}>
      <Logo />
    </a>
  ));
