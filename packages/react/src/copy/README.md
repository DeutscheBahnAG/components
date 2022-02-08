# Copy (typography)

```js
import { Copy } from '@db-design/react';
```

```jsx
<Copy>Great content</Copy>
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
        <td><code>ResponsiveType&lt;&quot;xs&quot; | &quot;s&quot; | &quot;m&quot; | &quot;l&quot;&gt;</code></td>
        <td>false</td>
        <td>m</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>bold</strong></td>
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
<Copy size="l">
  Copy in size L. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Copy>
```

```jsx
<Copy size="m">
  Copy in size M. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr.
</Copy>
```

```jsx
<Copy size="s">
  Copy in size S. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Copy>
```

```jsx
<Copy size="xs">
  Copy in size XS. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Copy>
```

## Weight

```jsx
<Copy bold>Bold copy</Copy>
```

```jsx
<Copy>
  Partially <b>bold</b> copy
</Copy>
```

```jsx
<Copy>
  Partially <strong>bold</strong> copy
</Copy>
```

## Italic

```jsx
<Copy>
  Partially <i>italic</i> copy
</Copy>
```

```jsx
<Copy>
  Partially <em>italic</em> copy
</Copy>
```

## Secondary

```jsx
<Copy variant="secondary">Secondary Copy</Copy>
```

## Usage

The `<Copy>` component adds the text style only. It is recommended to wrap it in a `<p>` or other HTML element depending on your needs.

```jsx
<p>
  <Copy>
    Copy in a p. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir
    haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Copy>
</p>
```

```jsx
<h1>
  <Copy>
    Copy in a h1. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Copy>
</h1>
```

```jsx
<label>
  <Copy size="s">Copy S in a label.</Copy>
</label>
```

If you expect more than one line, take care the wrapping element is a block element:

```jsx
<label>
  <Copy size="s">
    Copy in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Copy>
</label>
```

By applying `display: block`, the line-height works as expected:

```jsx
<label style={{ display: 'block' }}>
  <Copy size="s">
    Copy in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Copy>
</label>
```
