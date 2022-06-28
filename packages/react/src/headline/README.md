# Headline (typography)

Default headline sizes for all, especially content-driven websites.

```jsx
<Headline>Great content</Headline>
```

## Imports

```js
import { Headline } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/headline';
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
<Headline size="xl">Headline in size XL</Headline>
```

```jsx
<Headline size="l">Headline in size L</Headline>
```

```jsx
<Headline size="m">Headline in size M</Headline>
```

```jsx
<Headline size="s">Headline in size S</Headline>
```

## Weight

```jsx
<Headline light>Light Headline</Headline>
```

## Secondary

```jsx
<Headline variant="secondary">Secondary Headline</Headline>
```

## Usage

The `<Headline>` component adds the text style only. It is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

```jsx
<h1>
  <Headline size="xl">Headline in an h1.</Headline>
</h1>
```

```jsx
<h2>
  <Headline size="xl">Headline in an h2.</Headline>
</h2>
```

```jsx
<h2>
  <Headline size="m">Medium headline in an h2.</Headline>
</h2>
```
