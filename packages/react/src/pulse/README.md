# Pulse

The Pulse is an [additional brand element of Deutsche Bahn’s corporate design](https://marketingportal.extranet.deutschebahn.com/en/pulse). It should be used in combination with the Logo.

The best way to get started is the [Logo and Pulse playground](https://dpp.bahn-x.de/foundation/logo-and-pulse#interactive-logo-playground).

```jsx
<Pulse />
```

## Imports

```js
import { Pulse } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/logo';
```

The Pulse component’s styles depend on the Logo component.

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
        <td><strong>logoUnitsTop</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td>0.5</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>logoUnitsBottom</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Logo and Pulse

The spacing of the Logo and Pulse follow very specific guidelines. The Pulse component has been developed to follow the guidelines and create a worry-free implementation for developers. To make advantage of the automatic spacing, put the text of your headline within the Pulse component:

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" />
  <Pulse>
    <Headline size="l">Your headline</Headline>
  </Pulse>
</>;
```

## Margins

`logoUnitsTop`, `gap` and `logoUnitsBottom` can set a margin using the Logo’s height as a unit:

`logoUnitsTop`: Margin top – between Logo and first line of text within the Pulse (must be set to at least `0.5` (better `1`) when `<Logo>` and `<Pulse>` directly follow each other):

```jsx
import { Logo, Headline, Container, Theme } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" />
  <Pulse logoUnitsTop="2">
    <Headline size="l">Your headline</Headline>
  </Pulse>
  <Theme theme="DB_LIGHT_ALTERNATE">
    <Container filled width="content" align="center">
      (After)
    </Container>
  </Theme>
</>;
```

`logoUnitsBottom`: Margin bottom – between the visual representation of the Pulse and the next element:

```jsx
import { Logo, Headline, Container, Theme } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" />
  <Pulse logoUnitsBottom="0.5">
    <Headline size="l">Your headline</Headline>
  </Pulse>
  <Theme theme="DB_LIGHT_ALTERNATE">
    <Container filled width="content" align="center">
      (After)
    </Container>
  </Theme>
</>;
```

## Size

The sizes are optimized for pixel-perfect rendering of the logo (based on its
10 : 7 aspect ratio). For each size of the Logo there’s a matching Pulse.

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" size="m" />
  <Pulse size="m">
    <Headline size="m">Headline</Headline>
  </Pulse>
</>;
```

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" size="l" />
  <Pulse size="l">
    <Headline size="l">Headline</Headline>
  </Pulse>
</>;
```

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse size="xl">
    <Headline size="l">Headline</Headline>
  </Pulse>
</>;
```

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" size="xxl" />
  <Pulse size="xxl">
    <Headline size="l">Headline</Headline>
  </Pulse>
</>;
```

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse size="xl">
    <Headline size="xl">Headline</Headline>
  </Pulse>
</>;
```

```jsx
import { Logo, Headline } from '@db-design/react';
<>
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse size="xl">
    <Headline size="xl">Headline</Headline>
    <Headline variant="secondary" light size="l">
      Subline
    </Headline>
  </Pulse>
</>;
```

Never use different sizes for the Logo and the Pulse.

```jsx static
<Logo logoUnitsBottom="1" size="s" />
<Pulse size="xxl" />
```

Even though technically possible, using the Pulse in size `xs` and `s` might not make sense. Therefore, no example has been included in this documentation.

Check the [Pulse guidelines](https://marketingportal.extranet.deutschebahn.com/en/pulse) for details.
