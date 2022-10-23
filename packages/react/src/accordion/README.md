# Accordion

Wrapper component for `<Accordionitem>` components.

```jsx noeditor
import { Accordionitem, Body } from '@db-design/react';
<Accordion>
  <Accordionitem title="Expand me">
    <p>
      <Body>Some more information</Body>
    </p>
  </Accordionitem>
</Accordion>;
```

## Imports

```js
import { Accordion } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/accordion';
@import '@db-design/styles/components/list';
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
import { Accordionitem, Body } from '@db-design/react';
<Accordion>
  <Accordionitem title="ICE">
    <p>
      <Body>Some more information on ICE services</Body>
    </p>
  </Accordionitem>
  <Accordionitem title="S-Bahn">
    <p>
      <Body>Some more information on S-Bahn services</Body>
    </p>
  </Accordionitem>
  <Accordionitem title="Call a Bike">
    <p>
      <Body>Some more information on Call a Bike services</Body>
    </p>
  </Accordionitem>
</Accordion>;
```

### Single item with lines

```jsx
import { Accordionitem, Body } from '@db-design/react';
<Accordion outerLines>
  <Accordionitem title="Expand me">
    <p>
      <Body>Some more information</Body>
    </p>
  </Accordionitem>
</Accordion>;
```
