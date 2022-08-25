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
        <td><strong>tagName</strong></td>
        <td><code>&quot;blockquote&quot; | &quot;dd&quot; | &quot;div&quot; | &quot;dt&quot; | &quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; | &quot;h4&quot; | &quot;h5&quot; | &quot;h6&quot; | &quot;li&quot; | &quot;p&quot; | &quot;span&quot; | &quot;td&quot; | &quot;th&quot;</code></td>
        <td>false</td>
        <td>span</td>
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

The `<Display>` component adds the text style only. By default, it renders a `<span>` element. So, it is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

You can also pass a `tagName` to make it render any of `<blockquote>`, `<dd>`, `<div>`, `<dt>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<li>`, `<p>`, `<span>`, `<td>`, or `<th>`.


```jsx
<h1>
  <Display size="xl">Display in an h1.</Display>
</h1>

{/* which is visually identical to */}
<Display tagName="h1" size="xl">Display in an h1.</Headline>
```

```jsx
<Display tagName="h2" size="xl">Display in an h2.</Display>
```

```jsx
<Display tagName="h2" size="m">Medium headline in an h2.</Display>
```
