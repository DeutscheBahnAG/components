# Loadingindicator

```js
import { Loadingindicator } from '@db-design/react';
```

```jsx
<Loadingindicator />
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
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;xs&quot; | &quot;s&quot; | &quot;m&quot; | &quot;l&quot; | &quot;xl&quot;&gt;</code></td>
        <td>false</td>
        <td>l</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

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
<div style={{ color: '#1455c0' }}>
  <Loadingindicator />
</div>
```
