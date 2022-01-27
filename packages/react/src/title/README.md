# Title (typography)

```js
import { Title } from '@db-design/react';
```

```jsx
<Title>Great content</Title>
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
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;s&quot; | &quot;m&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot;&gt;</code></td>
        <td>false</td>
        <td>xxl</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>light</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>variant</strong></td>
        <td><code>&quot;primary&quot; | &quot;secondary&quot;</code></td>
        <td>false</td>
        <td>primary</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Size

```jsx
<Title size="xxl">Title in size XXL</Title>
```

```jsx
<Title size="xl">Title in size XL</Title>
```

```jsx
<Title size="l">Title in size L</Title>
```

```jsx
<Title size="m">Title in size M</Title>
```

```jsx
<Title size="s">Title in size S</Title>
```

## Weight

```jsx
<Title light>Light Title</Title>
```

## Secondary

```jsx
<Title variant="secondary">Secondary Title</Title>
```

## Usage

The `<Title>` component adds the text style only. It is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

```jsx
<h1>
  <Title size="xxl">Title in a h1.</Title>
</h1>
```

```jsx
<h2>
  <Title size="xxl">Title in a h2.</Title>
</h2>
```

```jsx
<h2>
  <Title size="m">Medium title in a h2.</Title>
</h2>
```
