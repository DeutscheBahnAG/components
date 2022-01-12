# Anchor

```js
import { Anchor } from '@db-design/react';
```

The Anchor component wraps a headline and adds an `id` as anchor to directly jump into the current section. It automatically adds an offset (not a margin) on top of the headline to leave some whitespace when the link is opened. When clicking the Anchor’s Button, the (complete) URL gets copied into the clipboard in case the browser supports this.

Hover over ‘My section’ to see the Anchor appearing:

```jsx
<Anchor id="my-section">My section</Anchor>
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
        <td><p>Optional class name</p></td>
      </tr>
      <tr>
        <td><strong>id</strong></td>
        <td><code>string</code></td>
        <td>true</td>
        <td></td>
        <td><p>ID to link to</p></td>
      </tr>
      <tr>
        <td><strong>labels</strong></td>
        <td><code>{ button: string; notification: string; }</code></td>
        <td>false</td>
        <td></td>
        <td><p>Override default label</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## In combination with a title

```jsx
import { Headline } from '@db-design/react';
<h1>
  <Headline size="xxl">
    <Anchor id="my-title">My title</Anchor>
  </Headline>
</h1>;
```

## Automatically sanitize

This example results in `#my-title`:

```jsx
import { Headline } from '@db-design/react';
const title = 'My title';
<Anchor id={title}>
  <Headline size="xxl">{title}</Headline>
</Anchor>;
```
