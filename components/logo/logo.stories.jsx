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
    <div style={{ backgroundColor: '#f0f3f5', padding: '16px' }}>
      <Logo variant={Logo.variants.DEFAULT} />
    </div>
  ))
  .add('Variant: Filled (white background)', () => (
    <div style={{ backgroundColor: '#3c414b', padding: '16px' }}>
      <Logo variant={Logo.variants.FILLED} />
    </div>
  ))
  .add('Variant: Outlined (white background and border)', () => (
    <div style={{ backgroundColor: '#ec0016', padding: '16px' }}>
      <Logo variant={Logo.variants.OUTLINED} />
    </div>
  ))
  .add('Variant: White (transparent background)', () => (
    <div style={{ backgroundColor: '#641e32', padding: '16px' }}>
      <Logo variant={Logo.variants.WHITE} />
    </div>
  ))
  .add('Linked', () => (
    <a href="#xyz" style={{ outline: 0 }}>
      <Logo />
    </a>
  ));
