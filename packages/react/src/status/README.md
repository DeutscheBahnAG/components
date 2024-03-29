# Status

A status message with icon and optional colour.

```jsx
<Status>This is a status</Status>
```

## Imports

```jsx
import { Status } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/status';
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
        <td><strong>severity</strong></td>
        <td><code>&quot;informative&quot; | &quot;warning&quot; | &quot;error&quot; | &quot;fatal&quot; | &quot;success&quot; | &quot;unknown&quot; | &quot;not-applicable&quot;</code></td>
        <td>false</td>
        <td>informative</td>
        <td><p>The purpose of the Status, affects visual styling</p></td>
      </tr>
      <tr>
        <td><strong>children</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>The text to be displayed</p></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Variants

### Success

```jsx
<Status severity="success">This feature is included</Status>
```

### Info

```jsx
<Status severity="informative">Works as expected</Status>
```

### Warning

```jsx
<Status severity="warning">This feature is not included</Status>
```

### Error

```jsx
<Status severity="error">You might not reach a connecting train</Status>
```

### Fatal

```jsx
<Status severity="fatal">The train got cancelled</Status>
```

### Unknown

```jsx
<Status severity="unknown">No data available</Status>
```

### Not applicable

```jsx
<Status severity="not-applicable">Not applicable</Status>
```

## Tests

### Long text

```jsx
<Status>
  The message of the Status can get a very long text which is sometimes needed. In this
  case the label wraps nicely and the checkbox stays aligned with the first line of the
  label.
</Status>
```
