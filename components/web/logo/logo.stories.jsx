import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
import Logo from './logo';
import Pulse from '../pulse';
import readme from './README.md';

const pageTitleStyles = {
  fontFamily: tokens.fontfamily.title,
  fontSize: `${tokens.textsize['title.xl.desktop']}px`,
  fontWeight: tokens.fontweight['title.bold'],
  lineHeight: `${tokens.lineheight['title.xl.desktop']}px`,
};

const sublineStyles = {
  fontFamily: tokens.fontfamily.title,
  fontSize: `${tokens.textsize['title.m.desktop']}px`,
  fontWeight: tokens.fontweight.title,
  lineHeight: `${tokens.lineheight['title.m.desktop']}px`,
  marginTop: tokens.spacing.s,
};

const copyStyles = {
  fontFamily: tokens.fontfamily.copy,
  fontSize: `${tokens.textsize['copy.m.desktop']}px`,
  fontWeight: tokens.fontweight.copy,
  lineHeight: `${tokens.lineheight['copy.m.desktop']}px`,
};

storiesOf('Components / DB Logo & Pulse', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Logo />)
  .add('Different alt text', () => <Logo>DB Regio</Logo>)
  .add('Pulse', () => <Pulse />)
  .add('Logo, Pulse and page title', () => (
    <>
      <Logo />
      <Pulse>
        <h1 style={pageTitleStyles}>Page title with margins defined by Brand</h1>
      </Pulse>
    </>
  ))
  .add('Logo, Pulse, page title and subline', () => (
    <>
      <Logo />
      <Pulse>
        <h1 style={pageTitleStyles}>Page title with margins defined by Brand</h1>
        <h2 style={sublineStyles}>Subline with margins defined by Brand</h2>
      </Pulse>
    </>
  ))
  .add('Centered', () => (
    <div style={{ textAlign: 'center' }}>
      <Logo />
      <Pulse>
        <h1 style={pageTitleStyles}>Page title with margins defined by Brand</h1>
        <h2 style={sublineStyles}>Subline with margins defined by Brand</h2>
      </Pulse>
    </div>
  ))
  .add('Right-aligned', () => (
    <div style={{ textAlign: 'right' }}>
      <Logo />
      <Pulse>
        <h1 style={pageTitleStyles}>Page title with margins defined by Brand</h1>
        <h2 style={sublineStyles}>Subline with margins defined by Brand</h2>
      </Pulse>
    </div>
  ))
  .add('X-small size', () => (
    <>
      <Logo size={Logo.sizes.XS} />
      <Pulse size={Logo.sizes.XS}>
        <h1 style={copyStyles}>
          Size XS should <b>not</b> be used with a Pulse in most cases.
        </h1>
      </Pulse>
    </>
  ))
  .add('Small size', () => (
    <>
      <Logo size={Logo.sizes.S} />
      <Pulse size={Logo.sizes.S}>
        <h1 style={copyStyles}>
          Size S should <b>not</b> be used with a Pulse in most cases.
        </h1>
      </Pulse>
    </>
  ))
  .add('Medium size', () => (
    <>
      <Logo size={Logo.sizes.M} />
      <Pulse size={Logo.sizes.M}>
        <h1
          style={{
            ...pageTitleStyles,
            fontSize: `${tokens.textsize['title.m.desktop']}px`,
            lineHeight: `${tokens.lineheight['title.m.desktop']}px`,
          }}
        >
          Page title with margins defined by Brand
        </h1>
      </Pulse>
    </>
  ))
  .add('Large size', () => (
    <>
      <Logo size={Logo.sizes.L} />
      <Pulse size={Logo.sizes.L}>
        <h1
          style={{
            ...pageTitleStyles,
            fontSize: `${tokens.textsize['title.l.desktop']}px`,
            lineHeight: `${tokens.lineheight['title.l.desktop']}px`,
          }}
        >
          Page title with margins defined by Brand
        </h1>
      </Pulse>
    </>
  ))
  .add('X-large size', () => (
    <>
      <Logo size={Logo.sizes.XL} />
      <Pulse size={Logo.sizes.XL}>
        <h1
          style={{
            ...pageTitleStyles,
            fontSize: `${tokens.textsize['title.xl.desktop']}px`,
            lineHeight: `${tokens.lineheight['title.xl.desktop']}px`,
          }}
        >
          Page title with margins defined by Brand
        </h1>
      </Pulse>
    </>
  ))
  .add('XX-large size', () => (
    <>
      <Logo size={Logo.sizes.XXL} />
      <Pulse size={Logo.sizes.XXL}>
        <h1
          style={{
            ...pageTitleStyles,
            fontSize: `${tokens.textsize['title.xxl.desktop']}px`,
            lineHeight: `${tokens.lineheight['title.xxl.desktop']}px`,
          }}
        >
          Page title with margins defined by Brand
        </h1>
      </Pulse>
    </>
  ))
  .add('Variant: Default (transparent background)', () => (
    <div style={{ backgroundColor: tokens.palette.coolgray100, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.DEFAULT} />
      <Pulse variant={Logo.variants.DEFAULT}>
        <h1 style={pageTitleStyles}>Title</h1>
      </Pulse>
    </div>
  ))
  .add('Variant: Filled (white background)', () => (
    <div style={{ backgroundColor: tokens.palette.coolgray200, padding: tokens.spacing.m }}>
      <Logo variant={Logo.variants.FILLED} />
      <Pulse variant={Logo.variants.FILLED}>
        <h1 style={pageTitleStyles}>Title</h1>
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
        <h1 style={pageTitleStyles}>Title</h1>
      </Pulse>
    </div>
  ))
  .add('Adding a link', () => <Logo href="#xyz" />);
