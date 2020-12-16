import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
import Logo from './logo';
import Pulse from '../pulse';
import Title from '../title';
import Copy from '../copy';
import readme from './README.md';

storiesOf('Components / DB Logo & Pulse', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Logo />)
  .add('Different alt text', () => <Logo>DB Regio</Logo>)
  .add('Pulse', () => <Pulse />)
  .add('Logo, Pulse and page title', () => (
    <>
      <Logo />
      <Pulse>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
      </Pulse>
    </>
  ))
  .add('Logo, Pulse, page title and subline', () => (
    <>
      <Logo />
      <Pulse>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
        <Title size={Title.sizes.M} variant={Title.variants.SECONDARY} light>
          Subline with margins defined by Brand
        </Title>
      </Pulse>
    </>
  ))
  .add('Centered', () => (
    <div style={{ textAlign: 'center' }}>
      <Logo />
      <Pulse>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
        <Title size={Title.sizes.M} variant={Title.variants.SECONDARY} light>
          Subline with margins defined by Brand
        </Title>
      </Pulse>
    </div>
  ))
  .add('Right-aligned', () => (
    <div style={{ textAlign: 'right' }}>
      <Logo />
      <Pulse>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
        <Title size={Title.sizes.M} variant={Title.variants.SECONDARY} light>
          Subline with margins defined by Brand
        </Title>
      </Pulse>
    </div>
  ))
  .add('X-small size', () => (
    <>
      <Logo size={Logo.sizes.XS} />
      <Pulse size={Logo.sizes.XS}>
        <Copy size={Copy.sizes.XS}>
          Size XS should <b>not</b> be used with a Pulse in most cases.
        </Copy>
      </Pulse>
    </>
  ))
  .add('Small size', () => (
    <>
      <Logo size={Logo.sizes.S} />
      <Pulse size={Logo.sizes.S}>
        <Copy size={Copy.sizes.M}>
          Size S should <b>not</b> be used with a Pulse in most cases.
        </Copy>
      </Pulse>
    </>
  ))
  .add('Medium size', () => (
    <>
      <Logo size={Logo.sizes.M} />
      <Pulse size={Logo.sizes.M}>
        <Title size={Title.sizes.M}>Page title with margins defined by Brand</Title>
      </Pulse>
    </>
  ))
  .add('Large size', () => (
    <>
      <Logo size={Logo.sizes.L} />
      <Pulse size={Logo.sizes.L}>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
      </Pulse>
    </>
  ))
  .add('X-large size', () => (
    <>
      <Logo size={Logo.sizes.XL} />
      <Pulse size={Logo.sizes.XL}>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
      </Pulse>
    </>
  ))
  .add('XX-large size', () => (
    <>
      <Logo size={Logo.sizes.XXL} />
      <Pulse size={Logo.sizes.XXL}>
        <Title size={Title.sizes.L}>Page title with margins defined by Brand</Title>
      </Pulse>
    </>
  ))
  .add('XX-large size, XX-large text', () => (
    <>
      <Logo size={Logo.sizes.XXL} />
      <Pulse size={Logo.sizes.XXL}>
        <Title size={Title.sizes.XXL}>Page title with margins defined by Brand</Title>
      </Pulse>
    </>
  ))
  .add('Variant: Default (transparent background)', () => (
    <div style={{ backgroundColor: tokens.palette.coolgray100, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.DEFAULT} />
      <Pulse variant={Logo.variants.DEFAULT}>
        <Title size={Title.sizes.L}>Title</Title>
      </Pulse>
    </div>
  ))
  .add('Variant: Filled (white background)', () => (
    <div style={{ backgroundColor: tokens.palette.coolgray200, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.FILLED} />
      <Pulse variant={Logo.variants.FILLED}>
        <Title size={Title.sizes.L}>Title</Title>
      </Pulse>
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
      <Pulse variant={Logo.variants.WHITE}>
        <Title size={Title.sizes.L} style={{ color: tokens.palette.white }}>
          Title
        </Title>
      </Pulse>
    </div>
  ))
  .add('Adding a link', () => <Logo href="#xyz" />);
