# Button

```js
import { Button } from '@bahn-x/dbx-web';
```

```jsx
<Button onClick={alert}>Button</Button>
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
<Button variant={Button.variants.SECONDARY}>Button</Button>
```

### Solid

Solid Buttons can appear on other places of a website like inline actions (table row action, choose file, …).

```jsx
<Button variant={Button.variants.SOLID}>Button</Button>
```

### Hover only

Like a Solid Button but with no background by default.

```jsx
<Button variant={Button.variants.HOVER_ONLY}>Button</Button>
```

This is mostly useful for icons (toggle menu, close dialogue, …).

```jsx
import { NavigationClose } from '@bahn-x/dbx-icons';

<Button
  variant={Button.variants.HOVER_ONLY}
  shape={Button.shapes.ROUND}
  size={Button.sizes.M}
  icon={<NavigationClose />}
>
  Button
</Button>;
```

## Sizing

```jsx { "props": { "className": "space-inbetween" } }
<Button size={Button.sizes.S}>Button</Button>
<Button size={Button.sizes.S} variant={Button.variants.SECONDARY}>Button</Button>
<Button size={Button.sizes.S} variant={Button.variants.SOLID}>Button</Button>
```

```jsx { "props": { "className": "space-inbetween" } }
<Button size={Button.sizes.M}>Button</Button>
<Button size={Button.sizes.M} variant={Button.variants.SECONDARY}>Button</Button>
<Button size={Button.sizes.M} variant={Button.variants.SOLID}>Button</Button>
```

```jsx { "props": { "className": "space-inbetween" } }
<Button size={Button.sizes.L}>Button</Button>
<Button size={Button.sizes.L} variant={Button.variants.SECONDARY}>Button</Button>
<Button size={Button.sizes.L} variant={Button.variants.SOLID}>Button</Button>
```

```jsx { "props": { "className": "space-inbetween" } }
<Button size={Button.sizes.XL}>Button</Button>
<Button size={Button.sizes.XL} variant={Button.variants.SECONDARY}>Button</Button>
```

- Avoid using `primary` and `secondary` Buttons in size `S` and `M`.
- `solid` Buttons should not be used in size `XL`.
- An overview with recommendations of sizes in combinations with other properties [can be found in our Storybook](https://dbx-web-components.bahn-x.de/?path=/story/components-button--overview).

## Icons

Icons can be added as SVG. They must match the [DBX Icon specifications] (24 × 24 px incl. 2 px safe area).

```jsx
import { ActionAdd } from '@bahn-x/dbx-icons';
<Button icon={<ActionAdd />}>Button</Button>;
```

[dbx icon specifications]: https://dbx.bahn-x.de/foundation/icons

## Shapes

Icon-only Buttons can be either squared or round. They can be combined with different sizes and variants.

```jsx
import { ActionAdd } from '@bahn-x/dbx-icons';
<Button icon={<ActionAdd />} shape={Button.shapes.SQUARE}>
  Button
</Button>;
```

```jsx
import { ActionAdd } from '@bahn-x/dbx-icons';
<Button icon={<ActionAdd />} shape={Button.shapes.ROUND}>
  Button
</Button>;
```

## Full width

Full-width buttons can be used in combination with all other attributes.

```jsx
<Button fullWidth>Button</Button>
```

```jsx
<Button fullWidth variant={Button.variants.SECONDARY}>
  Button
</Button>
```

```jsx
<Button fullWidth size={Button.sizes.XL}>
  Button
</Button>
```

```jsx
<Button fullWidth size={Button.sizes.XL} variant={Button.variants.SECONDARY}>
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
<Button disabled variant={Button.variants.SECONDARY}>
  Button
</Button>
```

The only exception is the font-weight. It’s always matching the one of the active version of the `variant`. This way different widths or strange transition effects when toggling the state will be avoided and always look smooth and professional.

### Loading

The `loading` state of a button should be set after clicking the button in case the action is expected to take some time.

```jsx static
import React, { useState } from 'react';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    // startSlowAction();
  };

  return (
    <Button loading={isLoading} onClick={onClick}>
      Start slow action
    </Button>
  );
};
```

```jsx
<Button loading>Button</Button>
```

```jsx
<Button loading variant={Button.variants.SECONDARY}>
  Button
</Button>
```

```jsx
<Button loading size={Button.sizes.S}>
  Button
</Button>
```

```jsx
<Button loading size={Button.sizes.S} variant={Button.variants.SECONDARY}>
  Button
</Button>
```

```jsx
<Button loading size={Button.sizes.M}>
  Button
</Button>
```

```jsx
<Button loading size={Button.sizes.M} variant={Button.variants.SECONDARY}>
  Button
</Button>
```

```jsx
<Button loading size={Button.sizes.XL}>
  Button
</Button>
```

```jsx
<Button loading size={Button.sizes.XL} variant={Button.variants.SECONDARY}>
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
