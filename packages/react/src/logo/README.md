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
<div style={{ display: 'flex', margin: -16, borderRadius: 4, overflow: 'hidden' }}>
  <Container
    style={{
      padding: 32,
    }}
    filled
    className="DB_LIGHT_ALTERNATE"
  >
    <div>
      <Logo size="xl" href="/" />
    </div>
  </Container>
  <Container
    style={{
      padding: 32,
    }}
    filled
    className="DB_DARK"
  >
    <div style={{ width: 192 }}>
      <Logo size="xl" href="/" />
      <Logo size="xl" href="/" variant="white" style={{ marginLeft: 12 }} />
    </div>
  </Container>
  <Container
    style={{
      padding: 32,
    }}
    filled
    className="DB_BRANDED"
  >
    <div>
      <Logo size="xl" href="/" variant="white" />
    </div>
  </Container>
  <Container
    style={{
      background:
        'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover',
      padding: 32,
    }}
    filled
  >
    <div>
      <Logo size="xl" href="/" variant="filled" />
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


<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->
## Props

<details>
  <summary class="db-props-toggle">Show/hide component props</summary>
  <table class="db-props-table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>brand</strong></td>
        <td><code>&quot;DB&quot; | &quot;DB Netze&quot; | &quot;DB Schenker&quot; | &quot;DB Cargo&quot;</code></td>
        <td>false</td>
        <td>db</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>align</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td>left</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;xs&quot; | &quot;s&quot; | &quot;m&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot;&gt;</code></td>
        <td>false</td>
        <td>m</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>variant</strong></td>
        <td><code>&quot;auto&quot; | &quot;default&quot; | &quot;filled&quot; | &quot;white&quot;</code></td>
        <td>false</td>
        <td>auto</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>additionalMarking</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>direction</strong></td>
        <td><code>&quot;horizontal&quot; | &quot;vertical&quot; | &quot;full-width&quot;</code></td>
        <td>false</td>
        <td>horizontal</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>href</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>mt</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>mb</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Size

The sizes are optimized for pixel-perfect rendering of the logo (based on its
10 : 7 aspect ratio). For each size of the Logo there’s a matching Pulse.

```jsx
<Logo size="xs" />
```

```jsx
<Logo size="s" />
```

```jsx
<Logo size="m" />
```

```jsx
<Logo size="l" />
```

```jsx
<Logo size="xl" />
```

```jsx
<Logo size="xxl" />
```

## Responsive sizing

```jsx
<Logo size={{ mobile: 'm', tablet: 'xl' }} />
```

Use Logo size `m` on mobile and `xl` on tablet and desktop.

```jsx
<Logo size={{ mobile: 'm', tablet: 'l', desktop: 'xl' }} />
```

Use Logo size `m` on mobile, `l` on tablet and `xl` on desktop.

## Alt text

By default “DB” is used as a text alternative for screen readers by the Logo component.

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
    padding: 16,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  }}
>
  <Logo variant="default" />
</div>
```

```jsx
<div
  style={{
    background:
      'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover',
    padding: 16,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  }}
>
  <Logo variant="filled" />
</div>
```

The `default` and `white` variants do have transparent background. Light background is allowed to be visible. Noisy and dark backgrounds should use the `filled` variant. Please read the [official logo guidelines](https://marketingportal.extranet.deutschebahn.com/en/logo-2) for further details when to use which colors and backgrounds.

### Auto

Red or white logo with transparent background depending on the theme.

```jsx
<Logo />
```

### Default

Red logo with transparent background.

```jsx
<Logo variant="default" />
```

### Filled

Red logo with white background.

```jsx
<div
  style={{
    background:
      'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover',
    padding: 16,
    height: 192,
    borderRadius: 4,
    overflow: 'hidden',
  }}
>
  <Logo variant="filled" />
</div>
```

The variant `filled` has no visual effect on the Pulse.

### White

White logo with transparent background.

```jsx
<div
  style={{
    background: '#ec0016',
    padding: 16,
    borderRadius: 4,
    overflow: 'hidden',
  }}
>
  <Logo variant="white" />
</div>
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
<Logo additionalMarking="Zugportal.de" size="xxl" />
```

```jsx
import { Theme, Container } from '@db-design/react';
<Theme theme="DB_BRANDED">
  <Container filled style={{ padding: 16 }} width="content">
    <Logo additionalMarking="Westfalenbus" size="m" />
  </Container>
</Theme>;
```

### One line

```jsx
<Logo additionalMarking="Oberweißbacher Berg- und Schwarztalbahn" size="xl" />
```

### Two lines

The font size adjusts automatically according to our brand standards:

```jsx
<Logo additionalMarking="Oberweißbacher\nBerg- und Schwarztalbahn" size="xl" />
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
  size="xl"
/>
```

```jsx
<Logo
  direction="vertical"
  additionalMarking="Oberweißbacher\nBerg- und Schwarztalbahn"
  size="xl"
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
  size="xl"
/>
```

```jsx
<Logo
  direction="full-width"
  additionalMarking="Oberweißbacher\nBerg- und Schwarztalbahn"
  size="xl"
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
<Logo size="xs" additionalMarking="Marking" />
<Logo size="xs" additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size="s" additionalMarking="Marking" />
<Logo size="s" additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size="m" additionalMarking="Marking" />
<Logo size="m" additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size="l" additionalMarking="Marking" />
<Logo size="l" additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size="xl" additionalMarking="Marking" />
<Logo size="xl" additionalMarking="Marking\nand more marking" />
```

```jsx
<Logo size="xxl" additionalMarking="Marking" />
<Logo size="xxl" additionalMarking="Marking\nand more marking" />
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
