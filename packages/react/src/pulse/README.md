# Pulse

```js
import { Pulse } from '@bahn-x/react';
```

The Pulse is an [additional brand element of Deutsche Bahn’s corporate design](https://marketingportal.extranet.deutschebahn.com/en/pulse). It should be used in combination with the Logo.

```jsx
<Pulse />
```

## Logo and Pulse

The spacing of the Logo and Pulse follow very specific guidelines. The Pulse component has been developed to follow the guidelines and create a worry-free implementation for developers. To make advantage of the automatic spacing, put the text of your headline within the Pulse component:

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo />
  <Pulse>
    <Title size={Title.sizes.L}>Your headline</Title>
  </Pulse>
</>;
```

## Size

The sizes are optimized for pixel-perfect rendering of the logo (based on its
10 : 7 aspect ratio). For each size of the Logo there’s a matching Pulse.

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo size={Logo.sizes.M} />
  <Pulse size={Logo.sizes.M}>
    <Title size={Title.sizes.M}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo size={Logo.sizes.L} />
  <Pulse size={Logo.sizes.L}>
    <Title size={Title.sizes.L}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo size={Logo.sizes.XL} />
  <Pulse size={Logo.sizes.XL}>
    <Title size={Title.sizes.L}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo size={Logo.sizes.XXL} />
  <Pulse size={Logo.sizes.XXL}>
    <Title size={Title.sizes.L}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo size={Logo.sizes.XXL} />
  <Pulse size={Logo.sizes.XXL}>
    <Title size={Title.sizes.XXL}>Headline</Title>
  </Pulse>
</>;
```

```jsx
import { Logo, Title } from '@bahn-x/react';
<>
  <Logo size={Logo.sizes.XXL} />
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
<Logo size={Logo.sizes.S} />
<Pulse size={Logo.sizes.XXL} />
```

Even though technically possible, using the Pulse in size `XS` and `S` might not make sense. Therefore no example has been included into this documentation.

Check the [Pulse guidelines](https://marketingportal.extranet.deutschebahn.com/en/pulse) for details.
