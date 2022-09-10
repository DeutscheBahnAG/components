# Accordionitem

Child component of `<Accordion>`.

```jsx noeditor
import { Body } from '@db-design/react';
<Accordionitem title="Expand me">
  <p>
    <Body>Some more information</Body>
  </p>
</Accordionitem>;
```

## Imports

```js
import { Accordion, Accordionitem } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/accordion';
@import '@db-design/styles/components/accordionitem';
@import '@db-design/styles/components/headline';
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
import { Body } from '@db-design/react';
<Accordionitem title="Expand me">
  <p>
    <Body>Some more information</Body>
  </p>
</Accordionitem>;
```

### Multiple items should be wrapped in an Accordion component

```jsx
import { Accordion, Body } from '@db-design/react';
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
import { Headline, Body } from '@db-design/react';
<Accordionitem title={<Headline size="l">Huge title</Headline>}>
  <p>
    <Body>Some more information</Body>
  </p>
</Accordionitem>;
```

```jsx
import { Body } from '@db-design/react';
<Accordionitem title={<Body bold>Small title</Body>}>
  <p>
    <Body>Some more information</Body>
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
