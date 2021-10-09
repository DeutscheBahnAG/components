# Pulse

```js
import { Pulse } from '@db-design/react';
```

The Pulse is an [additional brand element of Deutsche Bahn’s corporate design](https://marketingportal.extranet.deutschebahn.com/en/pulse). It should be used in combination with the Logo.

```jsx
<Pulse />
```

## Logo and Pulse

The spacing of the Logo and Pulse follow very specific guidelines. The Pulse component has been developed to follow the guidelines and create a worry-free implementation for developers. To make advantage of the automatic spacing, put the text of your headline within the Pulse component:

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" />
  <Pulse>
    <Title size={Title.sizes.L}>Your headline</Title>
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
    <Title size={Title.sizes.L}>Your headline</Title>
  </Pulse>
  <Theme theme={Theme.themes.DB_LIGHT_ALTERNATE}>
    <Container filled width={Container.widths.CONTENT} align={Container.alignments.CENTER}>
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
    <Title size={Title.sizes.L}>Your headline</Title>
  </Pulse>
  <Theme theme={Theme.themes.DB_LIGHT_ALTERNATE}>
    <Container filled width={Container.widths.CONTENT} align={Container.alignments.CENTER}>
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
  <Logo mb="1" size={Logo.sizes.M} />
  <Pulse size={Logo.sizes.M}>
    <Title size={Title.sizes.M}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size={Logo.sizes.L} />
  <Pulse size={Logo.sizes.L}>
    <Title size={Title.sizes.L}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size={Logo.sizes.XL} />
  <Pulse size={Logo.sizes.XL}>
    <Title size={Title.sizes.L}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size={Logo.sizes.XXL} />
  <Pulse size={Logo.sizes.XXL}>
    <Title size={Title.sizes.L}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size={Logo.sizes.XXL} />
  <Pulse size={Logo.sizes.XXL}>
    <Title size={Title.sizes.XXL}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@db-design/react';
<>
  <Logo mb="1" size={Logo.sizes.XXL} />
  <Pulse size={Logo.sizes.XXL}>
    <Title size={Title.sizes.XXL}>Headline</Title>
    <Title variant={Title.variants.SECONDARY} light size={Title.sizes.L}>
      Subline
    </Title>
  </Pulse>
</>;
```

Never use different sizes for the Logo and the Pulse.

```jsx static
<Logo mb="1" size={Logo.sizes.S} />
<Pulse size={Logo.sizes.XXL} />
```

Even though technically possible, using the Pulse in size `XS` and `S` might not make sense. Therefore no example has been included into this documentation.

Check the [Pulse guidelines](https://marketingportal.extranet.deutschebahn.com/en/pulse) for details.
