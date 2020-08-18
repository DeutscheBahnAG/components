# Pulse

```js
import { Pulse } from '@bahn-x/dbx-web';
```

The Pulse is an [additional brand element of Deutsche Bahn’s corporate design](https://marketingportal.extranet.deutschebahn.com/en/pulse). It should be used in combination with the Logo.

```jsx
<Pulse />
```

## Logo and Pulse

The spacing of the Logo and Pulse follow very specific guidelines. The Pulse component has been developed to follow the guidelines and create a worry-free implementation for developers. To make advantage of the automatic spacing, put the text of your headline within the Pulse component:

```jsx
import { Logo } from '@bahn-x/dbx-web';
<>
  <Logo />
  <Pulse>
    <h1>Your headline</h1>
  </Pulse>
</>;
```

## Size

The sizes are optimized for pixel-perfect rendering of the logo (based on its
10 : 7 aspect ratio). For each size of the Logo there’s a matching Pulse.

```jsx
import { Logo } from '@bahn-x/dbx-web';
<>
  <Logo size={Logo.sizes.M} />
  <Pulse size={Logo.sizes.M}>
    <h1>Headline</h1>
  </Pulse>
</>;
```

```jsx
import { Logo } from '@bahn-x/dbx-web';
<>
  <Logo size={Logo.sizes.L} />
  <Pulse size={Logo.sizes.L}>
    <h1>Headline</h1>
  </Pulse>
</>;
```

```jsx
import { Logo } from '@bahn-x/dbx-web';
<>
  <Logo size={Logo.sizes.XL} />
  <Pulse size={Logo.sizes.XL}>
    <h1>Headline</h1>
  </Pulse>
</>;
```

```jsx
import { Logo } from '@bahn-x/dbx-web';
<>
  <Logo size={Logo.sizes.XXL} />
  <Pulse size={Logo.sizes.XXL}>
    <h1>Headline</h1>
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
