# Button

```js
import { Button } from '@db-design/react';
```

This component handles everything that ‘looks like a button’ – even when it’s technically a link (using `href`). Buttons that should look like a link must use the [Link component](/#/Components/Interactive/Link).

```jsx noeditor
import { Copy } from '@db-design/react';
import { ActionAdd } from '@db-design/react-icons';
<>
  <span>
    <Copy>Examples:</Copy>
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

Below all possible combinations of `ButtonSizes`, `ButtonShapes`,
and `ButtonVariants` as well as with and without Icon are listed. Crossed out
combinations shouldn’t be used and will raise a props validation warning.

```jsx noeditor
import { Fragment } from 'react';
import clsx from 'clsx';
import {
  validateVariantCombinations,
  ButtonVariants,
  ButtonIconPositions,
  ButtonShapes,
  ButtonSizes,
  ButtonTypes,
} from './button';
import { NavigationClose } from '@db-design/react-icons';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';

<>
  {ButtonVariants.map((variant) => (
    <Fragment key={variant}>
      <h3>ButtonVariant: {variant}</h3>
      <table className="sg-table">
        <thead>
          <tr>
            <th colSpan="3">&nbsp;</th>
            <th colSpan="2">Button shapes</th>
          </tr>
          <tr>
            <th>
              Button
              <br />
              sizes
            </th>
            <th>Default</th>
            <th>With Icon</th>
            <th>SQUARE</th>
            <th>ROUND</th>
          </tr>
        </thead>
        <tbody>
          {ButtonSizes.map((size) => (
            <tr key={`${variant}-${size}`}>
              <th>{size.toUpperCase()}</th>
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
              {ButtonShapes.map((shape) => {
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
                    className={clsx(`sg-buttons-${variant}-square-${size}`, {
                      'sg-not-allowed': notAllowed,
                    })}
                  >
                    <Button variant={variant} size={size} shape={shape} icon={<NavigationClose />}>
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
  <style>
    {`.sg-table {background: var(--db-primary-background-color); color: var(--db-primary-text-color); margin: ${tokens.spacing.m}px 0 ${tokens.spacing.l}px; border-radius: ${tokens.radius.l}px } .sg-table th, .sg-table td {text-align: left}`}
  </style>
</>;
```

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

const [isLoading, setIsLoading] = useState(false);

const slowAction = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
};

const onClick = async () => {
  setIsLoading(true);
  await slowAction();
  setIsLoading(false);
};

<Button loading={isLoading} onClick={onClick}>
  Start slow action
</Button>;
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

When both properties are set, a link (= `<a>`) gets rendered. The `onClick` still gets fired (e.g. for tracking links):

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
      width: '768px',
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
      width: '768px',
      pointerEvents: 'none',
    }}
  />
</>;
```

## Access DOM via Ref

You can use a [Ref](https://reactjs.org/docs/refs-and-the-dom.html) to access the DOM node of the Link or Button:

```jsx
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
