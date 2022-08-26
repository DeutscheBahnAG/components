# Body (typography)

Default text styles

```jsx
<Body>Great content</Body>
```

## Imports

```js
import { Body } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/body';
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
<Body size="l">
  Body in size L. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

```jsx
<Body size="m">
  Body in size M. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr.
</Body>
```

```jsx
<Body size="s">
  Body in size S. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

```jsx
<Body size="xs">
  Body in size XS. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

## Weight

```jsx
<Body bold>Bold copy</Body>
```

```jsx
<Body>
  Partially <b>bold</b> copy
</Body>
```

```jsx
<Body>
  Partially <strong>bold</strong> copy
</Body>
```

## Italic

```jsx
<Body>
  Partially <i>italic</i> copy
</Body>
```

```jsx
<Body>
  Partially <em>italic</em> copy
</Body>
```

## Secondary

```jsx
<Body variant="secondary">Secondary Body</Body>
```

## Usage

The `<Body>` component adds the text style only. By default, it renders a `<span>` element. So, it is recommended to wrap it in a `<p>` or other HTML element depending on your needs.

You can also pass a `tagName` to make it render any of `<blockquote>`, `<dd>`, `<div>`, `<dt>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<li>`, `<p>`, `<span>`, `<td>`, or `<th>`.

```jsx
<p>
  <Body>
    Body in a p. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir
    haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</p>

{/* which is visually identical to */}
<Body tagName="p">
  Body in a p. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir
  haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

```jsx
<h1>
  <Body>
    Body in an h1. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</h1>

{/* Which is visually identical to  */}
<Body tagName="h1">
  Body in an h1. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir
  haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

```jsx
<label>
  <Body size="s">Body S in a label.</Body>
</label>
```

If you expect more than one line, take care the wrapping element is a block element:

```jsx
<label>
  <Body size="s">
    Body in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</label>
```

By applying `display: block`, the line-height works as expected:

```jsx
<label style={{ display: 'block' }}>
  <Body size="s">
    Body in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</label>
```
