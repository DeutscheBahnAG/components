# Button

This component handles everything that ‘looks like a button’ – even when it’s technically a link (using `href`). Buttons that should look like a link must use the [Link component](/#/Components/Interactive/Link).

```jsx noeditor
import { Body } from '@db-design/react';
import { ActionAdd } from '@db-design/react-icons';
<>
  <span>
    <Body>Examples:</Body>
  </span>
  <span className="db-inline-spacer" />
  <Button onClick={alert} icon={<ActionAdd />}>
    Button
  </Button>
  <Button onClick={alert} variant="secondary">
    Button
  </Button>
  <Button onClick={alert} variant="solid">
    Button
  </Button>
  <Button onClick={alert} variant="hover-only">
    Button
  </Button>
  <Button onClick={alert} loading shape="square">
    Button
  </Button>
</>;
```

## Imports

```js
import { Button } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/button';
@import '@db-design/styles/components/icon'; // only if `icon` is set
@import '@db-design/styles/components/loadingindicator'; // only if `loading` is set
```

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
        <td><strong>shape</strong></td>
        <td><code>&quot;default&quot; | &quot;square&quot; | &quot;round&quot;</code></td>
        <td>false</td>
        <td>default</td>
        <td><p>the shape of the button</p></td>
      </tr>
      <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;s&quot; | &quot;m&quot; | &quot;l&quot; | &quot;xl&quot;&gt;</code></td>
        <td>false</td>
        <td>l</td>
        <td><p>the size of the button</p></td>
      </tr>
      <tr>
        <td><strong>disabled</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td><p>when true, button will be disabled</p></td>
      </tr>
      <tr>
        <td><strong>href</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>turns the Button into a regular link (anchor)</p></td>
      </tr>
      <tr>
        <td><strong>type</strong></td>
        <td><code>&quot;link&quot; | ButtonTypesType</code></td>
        <td>false</td>
        <td>button</td>
        <td><p>the type of the button</p></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>additional class names you want to add to the button</p></td>
      </tr>
      <tr>
        <td><strong>style</strong></td>
        <td><code>CSSProperties</code></td>
        <td>false</td>
        <td>{}</td>
        <td><p>inline styles</p></td>
      </tr>
      <tr>
        <td><strong>fullWidth</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td><p>when true, button will take up all available width</p></td>
      </tr>
      <tr>
        <td><strong>icon</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>optional icon (as <code>&lt;svg&gt;</code>)</p></td>
      </tr>
      <tr>
        <td><strong>iconPosition</strong></td>
        <td><code>&quot;before&quot; | &quot;after&quot;</code></td>
        <td>false</td>
        <td>before</td>
        <td><p>the position of the icon</p></td>
      </tr>
      <tr>
        <td><strong>loading</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td><p>whether the loading state is enabled</p></td>
      </tr>
      <tr>
        <td><strong>loadingLabel</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td>Wird geladen …</td>
        <td><p>a11y label for the button while in loading state</p></td>
      </tr>
      <tr>
        <td><strong>variant</strong></td>
        <td><code>&quot;primary&quot; | &quot;secondary&quot; | &quot;solid&quot; | &quot;hover-only&quot;</code></td>
        <td>false</td>
        <td>primary</td>
        <td><p>the appearance of the button</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Variants

### Primary

Primary Buttons must appear one time only. Primary is the default button style.

```jsx
<Button>Button</Button>
```

### Secondary

Secondary Buttons should appear next to Primary Buttons.

```jsx
<Button variant="secondary">Button</Button>
```

### Solid

Solid Buttons can appear on other places of a website like inline actions (table row action, choose file, …).

```jsx
<Button variant="solid">Button</Button>
```

### Hover only

Like a Solid Button but with no background by default.

```jsx
<Button variant="hover-only">Button</Button>
```

This is mostly useful for icons (toggle menu, close dialogue, …).

```jsx
import { NavigationClose } from '@db-design/react-icons';

<Button variant="hover-only" shape="round" size="m" icon={<NavigationClose />}>
  Button
</Button>;
```

## Sizing

```jsx
<Button size="s">Button</Button>
<Button size="s" variant="secondary">Button</Button>
<Button size="s" variant="solid">Button</Button>
```

```jsx
<Button size="m">Button</Button>
<Button size="m" variant="secondary">Button</Button>
<Button size="m" variant="solid">Button</Button>
```

```jsx
<Button size="l">Button</Button>
<Button size="l" variant="secondary">Button</Button>
<Button size="l" variant="solid">Button</Button>
```

```jsx
<Button size="xl">Button</Button>
<Button size="xl" variant="secondary">Button</Button>
```

- Avoid using `primary` and `secondary` Buttons in size `s` and `m`.
- `solid` Buttons should not be used in size `xl`.

## Icons

Icons can be added as SVG. They must match the [DB Icon specifications](https://dpp.bahn-x.de/foundation/icons) (24 × 24 px incl. 2 px safe area).

```jsx
import { ActionAdd } from '@db-design/react-icons';
<Button icon={<ActionAdd />}>Button</Button>;
```

## Icon position

```jsx
import { NavigationArrowBack } from '@db-design/react-icons';
<Button icon={<NavigationArrowBack />} iconPosition="before">
  Button
</Button>;
```

```jsx
import { NavigationArrowForward } from '@db-design/react-icons';
<Button icon={<NavigationArrowForward />} iconPosition="after">
  Button
</Button>;
```

## Shapes

Icon-only Buttons can be either squared or round. They can be combined with different sizes and variants.

```jsx
import { ActionAdd } from '@db-design/react-icons';
<Button icon={<ActionAdd />} shape="square">
  Button
</Button>;
```

```jsx
import { ActionAdd } from '@db-design/react-icons';
<Button icon={<ActionAdd />} shape="round">
  Button
</Button>;
```

## Overview of possible combinations

Below all possible combinations of `buttonSizes`, `buttonShapes`,
and `buttonVariants` as well as with and without Icon are listed. Disabled
combinations shouldn’t be used and will raise a props validation warning.

```jsx noeditor
import { Fragment } from 'react';
import clsx from 'clsx';
import { Headline, Body } from '@db-design/react';
import {
  validateVariantCombinations,
  buttonVariants,
  buttonIconPositions,
  buttonShapes,
  buttonSizes,
  buttonTypes,
} from './button';
import { NavigationClose } from '@db-design/react-icons';
return (
  <>
    {buttonVariants.map((variant) => (
      <Fragment key={variant}>
        <h3>
          <Headline size="m">{variant}</Headline>
        </h3>
        <table className="button-table">
          <thead>
            <tr>
              <th>
                <Body size="s" secondary>
                  Size
                </Body>
              </th>
              <th>
                <Body size="s" secondary>
                  Default
                </Body>
              </th>
              <th>
                <Body size="s" secondary>
                  With Icon
                </Body>
              </th>
              <th>
                <Body size="s" secondary>
                  Square
                </Body>
              </th>
              <th>
                <Body size="s" secondary>
                  Round
                </Body>
              </th>
            </tr>
          </thead>
          <tbody>
            {buttonSizes.map((size) => (
              <tr key={`${variant}-${size}`}>
                <th>{size}</th>
                <td
                  className={clsx(`sg-buttons-${variant}-square-${size}`, {
                    'sg-not-allowed':
                      validateVariantCombinations({
                        size,
                        shape: 'default',
                        variant,
                        icon: false,
                      }) !== null,
                  })}
                >
                  <Button variant={variant} size={size}>
                    Default
                  </Button>
                </td>
                {buttonShapes.map((shape) => {
                  const notAllowed =
                    validateVariantCombinations({
                      size,
                      shape,
                      variant,
                      icon: true,
                    }) !== null;
                  return (
                    <td
                      key={`${variant}-${size}-${shape}`}
                      className={`sg-buttons-${variant}-square-${size}`}
                    >
                      <Button
                        disabled={notAllowed}
                        variant={variant}
                        size={size}
                        shape={shape}
                        icon={<NavigationClose />}
                      >
                        {shape === 'default' ? 'Icon' : shape.toUpperCase()}
                      </Button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    ))}
  </>
);
```

<style>
  .button-table {
    background: var(--db-primary-background-color);
    color: var(--db-primary-text-color);
    margin: 8px -2px 0;
    border-radius: 4px;
    width: 100%;
  }
  .button-table + h3 {
    margin-top: 32px;
  }
  .button-table th,
  .button-table td {
    border-top: 1px var(--db-border-color) solid;
    text-align: left;
    padding: 4px 12px 4px 2px;
  }
  .button-table thead th {
    border-top: none;
  }
  .button-table th:first-child {
    text-align: left;
    width: 96px;
  }
  .button-table td:nth-child(2),
  .button-table td:nth-child(3) {
    width: 240px;
  }
  .button-table td:nth-child(4),
  .button-table td:nth-child(5) {
    width: 80px;
  }
</style>

## Full width

Full-width buttons can be used in combination with all other attributes.

```jsx
<Button fullWidth>Button</Button>
```

```jsx
<Button fullWidth variant="secondary">
  Button
</Button>
```

```jsx
<Button fullWidth size="xl">
  Button
</Button>
```

```jsx
<Button fullWidth size="xl" variant="secondary">
  Button
</Button>
```

## States

### Disabled

Disabled Buttons always look the same, independent of the `variant`.

```jsx
<Button disabled>Button</Button>
```

```jsx
<Button disabled variant="secondary">
  Button
</Button>
```

The only exception is the font-weight. It’s always matching the one of the active version of the `variant`. This way different widths or strange transition effects when toggling the state will be avoided and always look smooth and professional.

### Loading

The `loading` state of a button should be set after clicking the button in case the action is expected to take some time.

```jsx
import React, { useState } from 'react';
const LoadingButtonExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const slowAction = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  };

  const onClick = () => {
    setIsLoading(true);
    slowAction().then(() => setIsLoading(false));
  };

  return (
    <Button loading={isLoading} onClick={onClick}>
      Start slow action
    </Button>
  );
};

return <LoadingButtonExample />;
```

```jsx
<Button loading>Button</Button>
```

```jsx
<Button loading variant="secondary">
  Button
</Button>
```

```jsx
<Button loading size="s">
  Button
</Button>
```

```jsx
<Button loading size="s" variant="secondary">
  Button
</Button>
```

```jsx
<Button loading size="m">
  Button
</Button>
```

```jsx
<Button loading size="m" variant="secondary">
  Button
</Button>
```

```jsx
<Button loading size="xl">
  Button
</Button>
```

```jsx
<Button loading size="xl" variant="secondary">
  Button
</Button>
```

A loading Button automatically gets disabled and can’t receive the focus. This avoids clicking and starting an action twice. In case it is important to avoid a second click, setting the loading state might be a good idea even for usually fast actions.

## Semantic

The button can make use of different semantics while keeping the same style. All attributes mentioned above can be combined with the semantics.

### Default click buttons for JavaScript interaction:

```jsx
<Button onClick={alert}>Button</Button>
```

### Submit buttons for forms:

```jsx
<form action="#">
  {/* <Textfield /> */}
  <Button type="submit">Button</Button>
</form>
```

### Link buttons for call to actions:

```jsx
<Button href="#">Button</Button>
```

### Combined Links

When both properties are set, a link (= `<a>`) gets rendered. The `onClick` still gets fired (e.g., for tracking links):

```jsx
<Button href="#" onClick={alert}>
  Button
</Button>
```

## Using Next.js

Since Next.js requires the `href` to be set in a wrapper link component, the actual `Button` must have the `href` passed through. To do this, use the [`passHref`](https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag) switch in the Next.js link wrapper:

```jsx static
import NextLink from 'next/link';
import { Button } from '@db-design/react';

<NextLink href="/" passHref>
  <Button>Button</Button>
</NextLink>;
```

## Aligning Buttons

Buttons put next to each other automatically add spacing between each other:

```jsx
<>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</>
```

This spacing is independent of spacing. The next example has an additional space character added to the DOM, but visually results in the same spacing:

```jsx
<>
  <Button>Button 1</Button> <Button>Button 2</Button> <Button>Button 3</Button>
</>
```

The spacing used with a different Button size:

```jsx
<>
  <Button size="m">Button 1</Button>
  <Button size="m">Button 2</Button>
  <Button size="m">Button 3</Button>
</>
```

Text, Textfield, Button and Link **automatically align well** next to each other without any wrapper/extra CSS needed:

```jsx
import { Textfield, Link } from '@db-design/react';
<>
  <Link>Link</Link>
  <Textfield size="xl" value="Textfield" />
  <Button size="xl">Button</Button>
  <Button size="m" variant="solid">
    Button
  </Button>
  <span>Some text</span>
  {/* at least a <span>/<b>/… should be put around plain text */}
  <hr
    style={{
      border: '#73aef4 dashed',
      borderWidth: '1px 0 0',
      marginTop: '-20px',
      position: 'absolute',
      width: '736px',
      pointerEvents: 'none',
    }}
  />
  <hr
    style={{
      border: '#b4d5f6 dashed',
      borderWidth: '1px 0',
      marginTop: '-53px',
      position: 'absolute',
      height: '54px',
      width: '736px',
      pointerEvents: 'none',
    }}
  />
</>;
```

## Access DOM via Ref

You can use a [Ref](https://reactjs.org/docs/refs-and-the-dom.html) to access the DOM node of the Link or Button:

```jsx static
const RefExample = () => {
  const buttonRef = React.useRef(null);
  React.useEffect(() => {
    if (buttonRef.current) {
      console.log('Button reference to DOM node:', buttonRef.current);
      buttonRef.current.focus();
    }
  });
  return <Button ref={buttonRef}>A Button</Button>;
};
<RefExample />;
```

Note that the referred DOM node is either an anchor link or a button, depending on Button props described in the sections above.
