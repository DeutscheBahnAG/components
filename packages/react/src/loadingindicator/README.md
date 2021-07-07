# Loadingindicator

```js
import { Loadingindicator } from '@db-design/react';
```

```jsx
<Loadingindicator />
```

## Size

```jsx
<Loadingindicator size={Loadingindicator.sizes.XS} />
```

```jsx
<Loadingindicator size={Loadingindicator.sizes.S} />
```

```jsx
<Loadingindicator size={Loadingindicator.sizes.M} />
```

```jsx
<Loadingindicator size={Loadingindicator.sizes.L} />
```

```jsx
<Loadingindicator size={Loadingindicator.sizes.XL} />
```

## Controlling the colour

The component will adopt the [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword), so its colour can be changed by setting the CSS `color` on the parent element. See [Button](button#loading) as an example.

```jsx
import { palette } from '@bahn-x/dbx-tokens/src/deutsche-bahn';
<div style={{ color: palette.blue500 }}>
  <Loadingindicator />
</div>;
```
