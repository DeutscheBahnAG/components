# Layout

Sets the basic layout of the whole page.

```js
import { Layout } from '@db-design/react';
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
        <td><strong>children</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>Content</p></td>
      </tr>
      <tr>
        <td><strong>variant</strong></td>
        <td><code>&quot;centered&quot; | &quot;left-aligned&quot;</code></td>
        <td>false</td>
        <td>centered</td>
        <td><p>The Layout variant</p></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names you want to add to the Layout</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

```jsx static
<Layout variant="centered">{/* See <Container> documentation */}</Layout>
```

```jsx static
<Layout variant="left-aligned">{/* See <Container> documentation */}</Layout>
```

```jsx static
import { Container } from '@db-design/react';

<Layout variant="centered">
  <Container width="full">
    <div style={{display:}>
  </Container>
</Layout>
```
