# Pulse

```js
import { Pulse } from '@db-design/react';
```

The Pulse is an [additional brand element of Deutsche Bahn’s corporate design](https://marketingportal.extranet.deutschebahn.com/en/pulse). It should be used in combination with the Logo.

```jsx
<Pulse />
```

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->

<!-- END props-table -->

## Logo and Pulse

The spacing of the Logo and Pulse follow very specific guidelines. The Pulse component has been developed to follow the guidelines and create a worry-free implementation for developers. To make advantage of the automatic spacing, put the text of your headline within the Pulse component:

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" />
  <Pulse>
    <Title size="l">Your headline</Title>
  </Pulse>
</>;
```

## Margins

`mt`, `gap` and `mb` can set a margin using the Logo’s height as a unit:

`mt`: Margin top – between Logo and first line of text within the Pulse (must be set to at least `0.5` (better `1`) when `<Logo>` and `<Pulse>` directly follow each other):

```jsx
import { Logo, Title, Container, Theme } from '@db-design/react';
<>
  <Logo mb="1" />
  <Pulse mt="2">
    <Title size="l">Your headline</Title>
  </Pulse>
  <Theme theme="DB_LIGHT_ALTERNATE">
    <Container filled width="content" align="center">
      (After)
    </Container>
  </Theme>
</>;
```

`mb`: Margin bottom – between the visual representation of the Pulse and the next element:

```jsx
import { Logo, Title, Container, Theme } from '@db-design/react';
<>
  <Logo mb="1" />
  <Pulse mb="0.5">
    <Title size="l">Your headline</Title>
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
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size="m" />
  <Pulse size="m">
    <Title size="m">Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size="l" />
  <Pulse size="l">
    <Title size="l">Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size="xl" />
  <Pulse size="xl">
    <Title size="l">Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size="xxl" />
  <Pulse size="xxl">
    <Title size="l">Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size="xxl" />
  <Pulse size="xxl">
    <Title size="xxl">Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size="xxl" />
  <Pulse size="xxl">
    <Title size="xxl">Headline</Title>
    <Title variant="secondary" light size="l">
      Subline
    </Title>
  </Pulse>
</>;
```

Never use different sizes for the Logo and the Pulse.

```jsx static
<Logo mb="1" size="s" />
<Pulse size="xxl" />
```

Even though technically possible, using the Pulse in size `xs` and `s` might not make sense. Therefore no example has been included into this documentation.

Check the [Pulse guidelines](https://marketingportal.extranet.deutschebahn.com/en/pulse) for details.
