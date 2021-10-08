# Anchor

```js
import { Anchor } from '@db-design/react';
```

The Anchor component wraps a headline and adds an `id` as anchor to directly jump into the current section. It automatically adds an offset (not a margin) on top of the headline to leave some whitespace when the link is opened. When clicking the Anchor’s Button, the (complete) URL gets copied into the clipboard in case the browser supports this.

Hover over ‘My section’ to see the Anchor appearing:

```jsx
<Anchor id="my-section">My section</Anchor>
```

## In combination with a title

```jsx
import { Title } from '@db-design/react';
<h1>
  <Title size="xxl">
    <Anchor id="my-title">My title</Anchor>
  </Title>
</h1>;
```

## Automatically sanitize

This example results in `#my-title`:

```jsx
import { Title } from '@db-design/react';
const title = 'My title';
<Anchor id={title}>
  <Title size="xxl">{title}</Title>
</Anchor>;
```
