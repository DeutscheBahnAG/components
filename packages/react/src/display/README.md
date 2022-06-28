# Display (typography)

Huge text sizes mainly for marketing and design-driven projects for maximum flexibility.

```jsx
<Display>Great content</Display>
```

## Imports

```js
import { Display } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/display';
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
        <td><code>ResponsiveType&lt;&quot;s&quot; | &quot;m&quot; | &quot;l&quot; | &quot;xl&quot;&gt;</code></td>
        <td>false</td>
        <td>xl</td>
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
<Display size="xxl">Display in size XXL</Display>
```

```jsx
<Display size="xl">Display in size XL</Display>
```

```jsx
<Display size="l">Display in size L</Display>
```

```jsx
<Display size="m">Display in size M</Display>
```

```jsx
<Display size="s">Display in size S</Display>
```

```jsx
<Display size="xs">Display in size XS</Display>
```

## Weight

```jsx
<Display light>Light Display</Display>
```

## Usage

The `<Display>` component adds the text style only. It is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

```jsx
<h1>
  <Display size="xl">Display in an h1.</Display>
</h1>
```

```jsx
<h2>
  <Display size="xl">Display in an h2.</Display>
</h2>
```

```jsx
<h2>
  <Display size="m">Medium headline in an h2.</Display>
</h2>
```
