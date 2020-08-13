# Button

```js
import { Button } from '@bahn-x/dbx-web';
```

```jsx +jsxpreview +highlight="Button"
<Button>Button</Button>
```

## Variants

### Primary

Primary Buttons must appear one time only. Primary is the default button style.

```jsx +jsxpreview .right
<Button>Button</Button>
```

### Secondary

Secondary Buttons should appear next to Primary Buttons.

```jsx +jsxpreview +highlight=/variant=".+?"/ .right
<Button variant="secondary">Button</Button>
```

### Solid

Solid Buttons can appear on other places of a website like inline actions (table row action, choose file, …).

```jsx +jsxpreview +highlight=/variant=".+?"/ .right
<Button variant="solid">Button</Button>
```

### Hover only

Like a Solid Button but with no background by default. This is mostly useful for icons (toggle menu, close dialogue, …).

```jsx +jsxpreview +highlight=/variant=".+?"/ .right
<Button variant="hover-only">Button</Button>
```

## Sizing

```jsx +jsxpreview +highlight=/size=\{.+?\}/ .columns
<Button size={Button.sizes.S}>Button</Button>
<Button size={Button.sizes.S} variant="secondary">Button</Button>
<Button size={Button.sizes.S} variant="solid">Button</Button>
```

```jsx +jsxpreview +highlight=/size=\{.+?"/\} .columns
<Button size={Button.sizes.M}>Button</Button>
<Button size={Button.sizes.M} variant="secondary">Button</Button>
<Button size={Button.sizes.M} variant="solid">Button</Button>
```

```jsx +jsxpreview +highlight=/size=\{.+?"/\} .columns
<Button size={Button.sizes.L}>Button</Button>
<Button size={Button.sizes.L} variant="secondary">Button</Button>
<Button size={Button.sizes.L} variant="solid">Button</Button>
```

```jsx +jsxpreview +highlight=/size=\{.+?"/\} .columns
<Button size={Button.sizes.XL}>Button</Button>
<Button size={Button.sizes.XL} variant="secondary">Button</Button>
```

## Icons

Icons can be added as SVG. They must match the [DBX Icon specifications] (24 × 24 px incl. 2 px safe area).

```jsx +jsxpreview +highlight=/icon=[^ ]+?/
<Button icon={<svg></svg>}>Button</Button>
```

[dbx icon specifications]: https://dbx.bahn-x.de/foundation/icons

## Shapes

Icon-only Buttons can be either squared or round.

```jsx +jsxpreview +shape=/icon=".+?"/
<Button icon={<svg></svg>} shape="square">
  Button
</Button>
```

```jsx +jsxpreview +shape=/icon=".+?"/
<Button icon={<svg></svg>} shape="round">
  Button
</Button>
```

## Full width

Full-width buttons can be used in combination with all other attributes.

```jsx +jsxpreview +highlight=/fullWidth/
<Button fullWidth>Button</Button>
```

```jsx +jsxpreview +highlight=/fullWidth/
<Button fullWidth variant="secondary">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/fullWidth/
<Button fullWidth size="xl">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/fullWidth/
<Button fullWidth size="xl" variant="secondary">
  Button
</Button>
```

## States

### Disabled

Disabled Buttons always look the same.

```jsx +jsxpreview +highlight="disabled" .columns
<Button disabled>Button</Button>
```

```jsx +jsxpreview +highlight="disabled" .columns
<Button disabled variant="secondary">
  Button
</Button>
```

### Loading

The `loading` state of a button should be set after clicking the button in case the action is expected to take some time.

```jsx +highlight=/loading=[^ ]+/,/isLoading|setIsLoading/g,/true|false/g +showmore=1..2
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

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading>Button</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading variant="secondary">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading size="s">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading size="s" variant="secondary">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading size="m">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading size="m" variant="secondary">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading size="xl">
  Button
</Button>
```

```jsx +jsxpreview +highlight=/loading/ .columns
<Button loading size="xl" variant="secondary">
  Button
</Button>
```

A loading Button automatically gets disabled and can’t receive the focus. This avoids clicking and starting an action twice. In case it is important to avoid a second click, setting the loading state might be a good idea even for usually fast actions.

## Semantic

The button can make use of different semantics while keeping the same style. All attributes mentioned above can be combined with the semantics. <?: .full ?>

### Default click buttons for JavaScript interaction:

```jsx +jsxpreview .right
<Button>Button</Button>
```

### Submit buttons for forms:

```jsx +jsxpreview +highlight=/type=".+?"/ .right
<Button type="submit">Button</Button>
```

### Link buttons for call to actions:

```jsx +jsxpreview +highlight=/href=".+?"/ .right
<Button href="#">Button</Button>
```
