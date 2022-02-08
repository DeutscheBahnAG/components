# Accordion

```js
import { Accordion } from '@db-design/react';
```

```jsx noeditor
import { Accordionitem, Copy } from '@db-design/react';
<Accordion>
  <Accordionitem title="Expand me">
    <p>
      <Copy>Some more information</Copy>
    </p>
  </Accordionitem>
</Accordion>;
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
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names you want to add to the component</p></td>
      </tr>
      <tr>
        <td><strong>outerLines</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td><p>Whether to add an addional line before the first and after the last list item</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Usage

```jsx
import { Accordionitem, Copy } from '@db-design/react';
<Accordion>
  <Accordionitem title="ICE">
    <p>
      <Copy>Some more information on ICE services</Copy>
    </p>
  </Accordionitem>
  <Accordionitem title="S-Bahn">
    <p>
      <Copy>Some more information on S-Bahn services</Copy>
    </p>
  </Accordionitem>
  <Accordionitem title="Call a Bike">
    <p>
      <Copy>Some more information on Call a Bike services</Copy>
    </p>
  </Accordionitem>
</Accordion>;
```

### Single item with lines

```jsx
import { Accordionitem, Copy } from '@db-design/react';
<Accordion outerLines>
  <Accordionitem title="Expand me">
    <p>
      <Copy>Some more information</Copy>
    </p>
  </Accordionitem>
</Accordion>;
```
