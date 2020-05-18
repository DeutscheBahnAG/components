# Loadingindicator

```js
import Loadingindicator from '@bahn-x/dbx-loadingindicator';
```

```jsx +jsxpreview +highlight="Loadingindicator"
<Loadingindicator />
```


## Controlling the color

The component will adopt the [`currentColor`][mdn:currentcolor], so its color can be changed by setting the CSS `color` on the parent element. See [Button](button#loading) as an example.

```jsx +jsxpreview +highlight=/color: '.+?'/
<div style={{ color: '#1455c0' }}>
  <Loadingindicator />
</div>
```

[mdn:currentcolor]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword
