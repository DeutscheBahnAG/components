# Copy (typography)

```js
import { Copy } from '@db-design/react';
```

```jsx
<Copy>Great content</Copy>
```

## Size

```jsx
<Copy size={Copy.sizes.L}>
  Copy in size L. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
  die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
  spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
  Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
</Copy>
```

```jsx
<Copy size={Copy.sizes.M}>
  Copy in size M. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
  die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
  spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr.
</Copy>
```

```jsx
<Copy size={Copy.sizes.S}>
  Copy in size S. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
  die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
  spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
  Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
</Copy>
```

```jsx
<Copy size={Copy.sizes.XS}>
  Copy in size XS. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
  die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
  spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
  Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
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
<Copy variant={Copy.variants.SECONDARY}>Secondary Copy</Copy>
```

## Usage

The `<Copy>` component adds the text style only. It is recommended to wrap it in a `<p>` or other HTML element depending on your needs.

```jsx
<p>
  <Copy>
    Copy in a p. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben die
    Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
    spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
    Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
  </Copy>
</p>
```

```jsx
<h1>
  <Copy>
    Copy in a h1. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
    die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
    spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
    Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
  </Copy>
</h1>
```

```jsx
<label>
  <Copy size={Copy.sizes.S}>Copy S in a label.</Copy>
</label>
```

If you expect more than one line, take care the wrapping element is a block element:

```jsx
<label>
  <Copy size={Copy.sizes.S}>
    Copy in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
    die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
    spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
    Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
  </Copy>
</label>
```

By applying `display: block`, the line-height works as expected:

```jsx
<label style={{ display: 'block' }}>
  <Copy size={Copy.sizes.S}>
    Copy in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir haben
    die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen. Außerdem finden Sie
    spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte denken Sie daran, in unseren
    Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu tragen.
  </Copy>
</label>
```
