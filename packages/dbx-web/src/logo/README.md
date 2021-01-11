# Logo

```js
import { Logo } from '@bahn-x/dbx-web';
```

```jsx
<Logo />
```

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
  }}
>
  <Logo />
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
  }}
>
  <Logo variant={Logo.variants.FILLED} />
</div>
```

The `DEFAULT` and `WHITE` variants do have transparent background. Light background is allowed to be visible. Noisy and dark backgrounds should use the `FILLED` variant. Red backgrounds require the `OUTLINED` variant. Please read the [official logo guidelines](https://marketingportal.extranet.deutschebahn.com/en/logo-2) for further details when to use which colors and backgrounds.

### Default

Red logo with transparent background.

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div
  style={{
    padding: tokens.spacing['m'],
  }}
>
  <Logo />
</div>;
```

### Filled

Red logo with white background.

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div
  style={{
    background: tokens.palette['coolgray600'],
    padding: tokens.spacing['m'],
  }}
>
  <Logo variant={Logo.variants.FILLED} />
</div>;
```

The variant `FILLED` has no visual effect on the Pulse.

### Outlined

Red logo with white background and a white outline around the logo (which adds to the logo size; be aware when using `overflow: hidden`).

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div
  style={{
    background: tokens.color['brand'],
    padding: tokens.spacing['m'],
  }}
>
  <Logo variant={Logo.variants.OUTLINED} />
</div>;
```

Don’t use the Pulse with the variant `OUTLINED`.

### White

White logo with transparent background.

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div
  style={{
    background: tokens.palette['burgundy700'],
    padding: tokens.spacing['m'],
  }}
>
  <Logo variant={Logo.variants.WHITE} />
</div>;
```

## Linking the logo

The Logo can be linked. It automatically will show a DB-styled focus ring.

```jsx
<Logo href="/" />
```

## Highlights

- Minimal source code
- Pixel-perfect rendering
- Retina and high-resolution displays compatible
- Exact proportions – the logo will look exactly as it should
- The DBX Logo component gets visually optimized to look visually balanced when used in white on darker background

By using the DBX Logo component you can be sure your project adheres the DB brand with the highest possible quality.

```jsx noeditor
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<>
  <div
    style={{
      background: tokens.palette['white'],
      padding: tokens.spacing['m'],
      float: 'left',
    }}
  >
    <Logo size={Logo.sizes.XXL} />
  </div>
  <div
    style={{
      background: tokens.palette['coolgray700'],
      padding: tokens.spacing['m'],
      float: 'left',
    }}
  >
    <Logo size={Logo.sizes.XXL} variant={Logo.variants.WHITE} />
  </div>
  <div
    style={{
      background: tokens.palette['red500'],
      padding: tokens.spacing['m'],
      float: 'left',
    }}
  >
    <Logo size={Logo.sizes.XXL} variant={Logo.variants.WHITE} />
  </div>
</>;
```
