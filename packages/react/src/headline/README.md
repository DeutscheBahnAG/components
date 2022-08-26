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
        <td><strong>tagName</strong></td>
        <td><code>&quot;blockquote&quot; | &quot;dd&quot; | &quot;div&quot; | &quot;dt&quot; | &quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; | &quot;h4&quot; | &quot;h5&quot; | &quot;h6&quot; | &quot;li&quot; | &quot;p&quot; | &quot;span&quot; | &quot;td&quot; | &quot;th&quot;</code></td>
        <td>false</td>
        <td></td>
        <td><p>if omitted, the component will render a <code>&lt;span&gt;</code> tag and inherit its parent’s <code>display</code> CSS property</p></td>
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

The `<Headline>` component adds the text style only. By default, it renders a `<span>` element. So, it is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

You can also pass a `tagName` to make it render any of `<blockquote>`, `<dd>`, `<div>`, `<dt>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<li>`, `<p>`, `<span>`, `<td>`, or `<th>`.

```jsx
<h1>
  <Headline size="xl">Headline in an h1.</Headline>
</h1>

{/* which is visually identical to */}
<Headline tagName="h1" size="xl">Headline in an h1.</Headline>
```

```jsx
<Headline tagName="h2" size="xl">Headline in an h2.</Headline>
```

```jsx
<Headline tagName="h2" size="m">Medium headline in an h2.</Headline>
```
