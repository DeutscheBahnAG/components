# Loadingindicator

```js
import { Loadingindicator } from '@db-design/react';
```

```jsx
<Loadingindicator />
```

## Size

```jsx
<Loadingindicator size="xs" />
```

```jsx
<Loadingindicator size="s" />
```

```jsx
<Loadingindicator size="m" />
```

```jsx
<Loadingindicator size="l" />
```

```jsx
<Loadingindicator size="xl" />
```

## Controlling the colour

The component will adopt the [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword), so its colour can be changed by setting the CSS `color` on the parent element. See [Button](button#loading) as an example.

```jsx
import { palette } from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div style={{ color: palette.blue500 }}>
  <Loadingindicator />
</div>;
```
