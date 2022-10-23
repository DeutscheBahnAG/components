# List

A simple wrapper for its child elements to automatically add lines and spacing between them.

```jsx noeditor
import { Body, Transportchip } from '@db-design/react';
<List>
  <span>
    <Transportchip name="ICE 153" />
    <Body>ICE</Body>
  </span>
  <span>
    <Transportchip name="IC 621" />
    <Body>IC</Body>
  </span>
  <span>
    <Transportchip name="S 1" showProductLogo />
    <Body>S-Bahn</Body>
  </span>
</List>;
```

## Imports

```js
import { List } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
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
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names you want to add to the component</p></td>
      </tr>
      <tr>
        <td><strong>as</strong></td>
        <td><code>&quot;div&quot; | &quot;ol&quot; | &quot;ul&quot;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Semantical list type</p></td>
      </tr>
      <tr>
        <td><strong>renderItem</strong></td>
        <td><code>(item: ReactNode, key: string, El: &quot;div&quot; | &quot;li&quot;) =&gt; ReactNode</code></td>
        <td>false</td>
        <td>(item, key, ListItemElement, otherProps) => (
    <ListItemElement key={key} {...otherProps}>
      {item}
    </ListItemElement>
  )</td>
        <td><p>Override wrapper for list items</p></td>
      </tr>
      <tr>
        <td><strong>verticalPadding</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot;&gt;</code></td>
        <td>false</td>
        <td>s</td>
        <td><p>Vertical padding for list items</p></td>
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
import { Body } from '@db-design/react';
<List>
  <Body>ICE</Body>
  <Body>IC</Body>
  <Body>S-Bahn</Body>
</List>;
```

### Adjust padding

Paddings apply above and below each list item.

```jsx
import { Body } from '@db-design/react';
<List verticalPadding="ml">
  <Body>ICE</Body>
  <Body>IC</Body>
  <Body>S-Bahn</Body>
</List>;
```

Paddings can make use of responsive steps:

```jsx
import { Body } from '@db-design/react';
<List verticalPadding={{ mobile: 'xs', tablet: 'ml' }}>
  <Body>ICE</Body>
  <Body>IC</Body>
  <Body>S-Bahn</Body>
</List>;
```

### Outer lines

This option adds an additional line above and below the whole list (incl. extra padding).

```jsx
<List children={['1', '2']} />
```

```jsx
<List outerLines children={['1', '2']} />
```

This might be especially useful in case you want to have a single-item list being visible:

```jsx
<List children={['1']} />
```

```jsx
<List outerLines children={['1']} />
```

### List item wrapper

By default, a list is a visual, non-semantical element. Alternatively, `ul` or `ol` can be used.

```jsx
import { Body } from '@db-design/react';
<List as="ul">
  <Body>ICE</Body>
  <Body>IC</Body>
  <Body>S-Bahn</Body>
</List>;
```

### List item wrapper

```jsx
import { Checkbox, Body } from '@db-design/react';
<List
  renderItem={(item, key, ListItemElement, otherProps) => (
    <ListItemElement key={key} {...otherProps}>
      <Checkbox>{item}</Checkbox>
    </ListItemElement>
  )}
>
  <Body>ICE</Body>
  <Body>IC</Body>
  <Body>S-Bahn</Body>
</List>;
```

## Examples

### Accordion List

```jsx
import { Accordion } from '@db-design/react';
<List>
  <Accordion title="Accordion item">Content</Accordion>
</List>;
```

Multiple items:

```jsx
import { Accordion } from '@db-design/react';
<List>
  <Accordion title="ICE">High-speed train</Accordion>
  <Accordion title="S-Bahn">Suburban train</Accordion>
</List>;
```
