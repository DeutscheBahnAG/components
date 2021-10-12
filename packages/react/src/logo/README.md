# Logo

```js
import { Logo } from '@db-design/react';
```

This component has been carefully co-created with the Brand Team to strictly follow our brand guidelines, ensure rendering quality as well as providing a simple API for developers without the need of knowing the exact specifications. It offers a wide range of predefined, pixel-perfect sizes which perfectly work hand-in-hand with the [Pulse component](/#/Components/Brand/Pulse).

<style>
  .db-logo + .db-logo { margin-left: calc(var(--db-logo--height) * 3); }
  #rsg-root [class^=rsg--preview-] { padding: 32px 0 !important; }
</style>

```jsx noeditor
<div style={{ display: 'flex', margin: '48px 0' }}>
  <Logo />
  <Logo brand="netze" />
  <Logo brand="schenker" />
  <Logo brand="cargo" />
</div>
<div style={{ display: 'flex', margin: '48px 0' }}>
  <Logo additionalMarking="Rhein-Neckar-Bus" />
  <Logo additionalMarking="Regio Südost" direction="vertical"/>
</div>
```

```jsx noeditor
import { Container } from '@db-design/react';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div style={{ display: 'flex', margin: '48px 0', borderRadius: '6.3px', overflow: 'hidden' }}>
  <Container
    style={{
      padding: tokens.spacing['l'],
    }}
    filled
    className="DB_LIGHT_ALTERNATE"
  >
    <div>
      <Logo size={Logo.sizes.XL} href="/" />
    </div>
  </Container>
  <Container
    style={{
      padding: tokens.spacing['l'],
    }}
    filled
    className="DB_DARK"
  >
    <div style={{ width: '192px' }}>
      <Logo size={Logo.sizes.XL} href="/" />
      <Logo
        size={Logo.sizes.XL}
        href="/"
        variant={Logo.variants.WHITE}
        style={{ marginLeft: '12px' }}
      />
    </div>
  </Container>
  <Container
    style={{
      padding: tokens.spacing['l'],
    }}
    filled
    className="DB_BRANDED"
  >
    <div>
      <Logo size={Logo.sizes.XL} href="/" variant={Logo.variants.WHITE} />
    </div>
  </Container>
  <Container
    style={{
      background:
        'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover',
      padding: tokens.spacing['l'],
    }}
    filled
  >
    <div>
      <Logo size={Logo.sizes.XL} href="/" variant={Logo.variants.FILLED} />
    </div>
  </Container>
</div>;
```

This component implements the guidelines of:

- https://marketingportal.extranet.deutschebahn.com/en/logo-2
- https://marketingportal.extranet.deutschebahn.com/de/zusatzmarkierungen
- https://marketingportal.extranet.deutschebahn.com/de/db-cargo
- https://dpp.bahn-x.de/foundation/colours/how-to-use-colours#logo-and-pulse-colours
- https://dpp.bahn-x.de/foundation/accessibility/keyboard
- https://dpp.bahn-x.de/foundation/accessibility/screen-reader

## Size

The sizes are optimized for pixel-perfect rendering of the logo (based on its
10 : 7 aspect ratio). For each size of the Logo there’s a matching Pulse.

```jsx
<Logo size={Logo.sizes.XS} />
```

```jsx
<Logo size={Logo.sizes.S} />
```

```jsx
<Logo size={Logo.sizes.M} />
```

```jsx
<Logo size={Logo.sizes.L} />
```

```jsx
<Logo size={Logo.sizes.XL} />
```

```jsx
<Logo size={Logo.sizes.XXL} />
```

## Alt text

By default “Deutsche Bahn” is used as a text alternative for screen readers by the Logo component.

```jsx
<Logo />
```

In case you need another string, just add it as a children:

```jsx
<Logo>DB Regio</Logo>
```

## Variants

By default the logo has a transparent background.

```jsx
<div
  style={{
    background:
      'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf3_3.png) 0 0/cover',
    padding: '16px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '6.3px',
    overflow: 'hidden',
  }}
>
  <Logo variant={Logo.variants.DEFAULT} />
</div>
```

```jsx
<div
  style={{
    background:
      'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover',
    padding: '16px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '6.3px',
    overflow: 'hidden',
  }}
>
  <Logo variant={Logo.variants.FILLED} />
</div>
```

The `DEFAULT` and `WHITE` variants do have transparent background. Light background is allowed to be visible. Noisy and dark backgrounds should use the `FILLED` variant. Please read the [official logo guidelines](https://marketingportal.extranet.deutschebahn.com/en/logo-2) for further details when to use which colors and backgrounds.

### Auto

Red or white logo with transparent background depending on the theme.

```jsx
<Logo />
```

### Default

Red logo with transparent background.

```jsx
<Logo variant={Logo.variants.DEFAULT} />
```

### Filled

Red logo with white background.

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div
  style={{
    background:
      'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover',
    padding: tokens.spacing['m'],
    height: '192px',
    borderRadius: '6.3px',
    overflow: 'hidden',
  }}
>
  <Logo variant={Logo.variants.FILLED} />
</div>;
```

The variant `FILLED` has no visual effect on the Pulse.

### White

White logo with transparent background.

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div
  style={{
    background: tokens.palette['dbrot'],
    padding: tokens.spacing['m'],
    borderRadius: '6.3px',
    overflow: 'hidden',
  }}
>
  <Logo variant={Logo.variants.WHITE} />
</div>;
```

## Brands

```jsx
<Logo />
```

```jsx
<Logo brand="netze" />
```

```jsx
<Logo brand="schenker" />
```

```jsx
<Logo brand="cargo" />
```

## Align

This applies to the DB Cargo brand only.

```jsx
<Logo brand="cargo" align="left" />
```

```jsx
<Logo brand="cargo" align="center" />
```

```jsx
<Logo brand="cargo" align="right" />
```

## Additional markings

Additional markings denote the products and services assigned to a brand.
Additional markings are not designed logos. Their use is optional.

```jsx
<Logo additionalMarking="Regio Schleswig-Holstein" />
```

```jsx
<Logo additionalMarking="Zugportal.de" size={Logo.sizes.XXL} />
```

```jsx
import { Theme, Container } from '@db-design/react';
<Theme theme={Theme.themes.DB_BRANDED}>
  <Container filled style={{ padding: '16px' }} width={Container.widths.CONTENT}>
    <Logo additionalMarking="Westfalenbus" size={Logo.sizes.M} />
  </Container>
</Theme>;
```

### One line

```jsx
<Logo additionalMarking="Oberweißbacher Berg- und Schwarztalbahn" size={Logo.sizes.XL} />
```

### Two lines

The font size adjusts automatically according to our brand standards:

```jsx
<Logo additionalMarking="Oberweißbacher\nBerg- und Schwarztalbahn" size={Logo.sizes.XL} />
```

Use `\n` to set the line-break. Each marking must set the line-break manually for consistency with other (non-digital) marketing usage.

### Brands

In combination with a DB brand, the marking switches to the secondary text colour.

```jsx
<Logo brand="netze" additionalMarking="Notfalltechnik" />
```

```jsx
<Logo brand="schenker" additionalMarking="Oslo City Hub" />
```

Markings are not defined for the **DB Cargo** brand. Please contact the [Brand Team](marke@deutschebahn.com) first in case you have a need for it.

### Vertical

```jsx
<Logo
  direction="vertical"
  additionalMarking="Oberweißbacher Berg- und Schwarztalbahn"
  size={Logo.sizes.XL}
/>
```

```jsx
<Logo
  direction="vertical"
  additionalMarking="Oberweißbacher\nBerg- und Schwarztalbahn"
  size={Logo.sizes.XL}
/>
```

```jsx
<Logo direction="vertical" brand="netze" additionalMarking="Notfalltechnik" />
```

```jsx
<Logo direction="vertical" brand="schenker" additionalMarking="Kärnten" />
```

### Full width

```jsx
<Logo
  direction="full-width"
  additionalMarking="Oberweißbacher Berg- und Schwarztalbahn"
  size={Logo.sizes.XL}
/>
```

```jsx
<Logo
  direction="full-width"
  additionalMarking="Oberweißbacher\nBerg- und Schwarztalbahn"
  size={Logo.sizes.XL}
/>
```

```jsx
<Logo direction="full-width" brand="netze" additionalMarking="Notfalltechnik" />
```

```jsx
<Logo direction="full-width" brand="schenker" additionalMarking="Oslo City Hub" />
```

### Size

For accessibility reasons

- small logos use a minimum text size
- and switch to one-line text to ensure a minimum text size

```jsx
<Logo size={Logo.sizes.XS} additionalMarking="Marking" />
<Logo size={Logo.sizes.XS} additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size={Logo.sizes.S} additionalMarking="Marking" />
<Logo size={Logo.sizes.S} additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size={Logo.sizes.M} additionalMarking="Marking" />
<Logo size={Logo.sizes.M} additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size={Logo.sizes.L} additionalMarking="Marking" />
<Logo size={Logo.sizes.L} additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size={Logo.sizes.XL} additionalMarking="Marking" />
<Logo size={Logo.sizes.XL} additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size={Logo.sizes.XXL} additionalMarking="Marking" />
<Logo size={Logo.sizes.XXL} additionalMarking="Marking\nand more marking" />
```

## Linking the logo

The Logo can be linked. It automatically will show a DB-styled focus ring.

```jsx
<Logo href="/" />
<Logo href="/" additionalMarking="Marking" />
<Logo href="/" brand="netze" />
<Logo href="/" brand="cargo" align="center" />
```

## Highlights

- Minimal source code
- Pixel-perfect rendering
- Retina and high-resolution displays compatible
- Exact proportions – the logo will look exactly as it should
- The DB Logo component gets visually optimized to look visually balanced when used in white on darker background
- Official DB brands included
- All complex guidelines of markings (position, size and colour) are implemented with an simple API
- Accessible for screen readers

By using the DB Logo component you can be sure your project adheres the DB brand with the highest possible quality.
