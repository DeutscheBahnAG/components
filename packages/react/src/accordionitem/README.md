# Accordionitem

```js
import { Accordionitem } from '@db-design/react';
```

```jsx noeditor
import { Copy } from '@db-design/react';
<Accordionitem title="Expand me">
  <p>
    <Copy>Some more information</Copy>
  </p>
</Accordionitem>;
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
        <td><strong>title</strong></td>
        <td><code>ReactNode</code></td>
        <td>true</td>
        <td></td>
        <td><p>Title to show (<code>&lt;summary&gt;</code>)</p></td>
      </tr>
      <tr>
        <td><strong>children</strong></td>
        <td><code>ReactNode</code></td>
        <td>true</td>
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
        <td><strong>onClick</strong></td>
        <td><code>(event: MouseEvent&lt;HTMLElement, MouseEvent&gt;) =&gt; void</code></td>
        <td>false</td>
        <td></td>
        <td><p>Click on the title to open/close the Accordionitem</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Usage

```jsx
import { Copy } from '@db-design/react';
<Accordionitem title="Expand me">
  <p>
    <Copy>Some more information</Copy>
  </p>
</Accordionitem>;
```

### Multiple items should be wrapped in an Accordion componetn

```jsx
import { Accordion, Copy } from '@db-design/react';
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

## Other components as title

```jsx
import { Transportchip, Status } from '@db-design/react';
<Accordionitem
  title={
    <>
      <Transportchip name="S 1" showProductLogo /> <span>real-time information</span>
    </>
  }
>
  <Status severity="success">All trains on time</Status>
</Accordionitem>;
```

```jsx
import { Title, Copy } from '@db-design/react';
<Accordionitem title={<Title size="l">Huge title</Title>}>
  <p>
    <Copy>Some more information</Copy>
  </p>
</Accordionitem>;
```

```jsx
import { Copy } from '@db-design/react';
<Accordionitem title={<Copy bold>Small title</Copy>}>
  <p>
    <Copy>Some more information</Copy>
  </p>
</Accordionitem>;
```

## Click events

Clicks on the title (= open/close) can be tracked:

```jsx
<Accordionitem title="Click me" onClick={() => alert('Clicked!')}>
  Content
</Accordionitem>
```
