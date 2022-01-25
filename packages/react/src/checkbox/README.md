# Checkbox

```js
import { Checkbox } from '@db-design/react';
```

```jsx
<Checkbox>Checkbox</Checkbox>
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
        <td>Content rendered as the Checkbox label, can be text or any element except links and buttons</td>
      </tr>
    <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td>Additional class names you want to add to the Checkbox</td>
      </tr>
    <tr>
        <td><strong>indeterminate</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td>Show a bar instead of the checked state</td>
      </tr>
    <tr>
        <td><strong>style</strong></td>
        <td><code>CSSProperties</code></td>
        <td>false</td>
        <td>{}</td>
        <td>Inline styles</td>
      </tr>
    <tr>
        <td><strong>footer</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td>Additional content below the label, e.g. links that must not be part of the label</td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## States

### Checked

```jsx
<Checkbox>Checkbox unchecked</Checkbox>
```

```jsx
<Checkbox checked>Checkbox checked</Checkbox>
```

### Indeterminate

The indeterminate state does not show if the Checkbox is checked or not. When you click the Checkbox, it will change its [state](#states). The first example will change to checked, the second example will change to unchecked when clicking the Checkbox.

```jsx
<Checkbox indeterminate>Checkbox indeterminate unchecked</Checkbox>
```

```jsx
<Checkbox indeterminate checked>
  Checkbox indeterminate checked
</Checkbox>
```

The indeterminate state can’t be restored by the user. It must be reset via JavaScript:

```jsx
import { useState } from 'react';
import { Button } from '@db-design/react';
import { spacing } from '@bahn-x/dbx-tokens/src/deutsche-bahn';

const ExampleComponent = () => {
  const [isIndeterminate, setIndeterminate] = useState(true);
  const [isChecked, setChecked] = useState(true);

  const handleButtonClick = () => {
    setIndeterminate(true);
  };

  const handleCheckboxClick = () => {
    setIndeterminate(false);
    setChecked(!isChecked);
  };

  return (
    <>
      <Checkbox
        indeterminate={isIndeterminate}
        checked={isChecked}
        onClick={handleCheckboxClick}
      >
        Checkbox indeterminate checked
      </Checkbox>
      <Button onClick={handleButtonClick} disabled={isIndeterminate} size="m">
        Reset
      </Button>
    </>
  );
};

return <ExampleComponent />;
```

### Disabled

```jsx
<Checkbox disabled>Disabled Checkbox</Checkbox>
```

```jsx
<Checkbox disabled checked>
  Disabled Checkbox
</Checkbox>
```

## Checkbox and links

The label of the Checkbox is an interactive element to toggle its state. If you add a link within the label,
it’s difficult to cope with an interactive element within an already interactive element. This is an [accessibility issue
for people who use screen readers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#Accessibility_concerns).

Therefor we recommend to place links associated with the Checkbox right below it, outside the label.

```jsx
<Checkbox footer={<a href="#terms">Read our Terms and Conditions</a>}>
  I accept the <b>Terms and Conditions</b>.
</Checkbox>
```

Labels must not contain links for [accessibility](https://dpp.bahn-x.de/foundation/accessibility/screen-reader) reasons. Therefore this antipattern gets overridden by CSS:

```jsx
// Avoid this design pattern
<Checkbox>
  I accept the <a href="#terms">Terms and Conditions</a>.
</Checkbox>
```

It’s possible to use more than one link in the footer:

```jsx
<Checkbox
  footer={
    <>
      <a href="#terms-db">Read the Terms and Conditions of Deutsche Bahn AG</a>{' '}
      <a href="#terms-xyz">Read the Terms and Conditions of XYZ AG</a>
    </>
  }
>
  I accept the <b>Terms and Conditions of Deutsche Bahn AG</b> and the{' '}
  <b>Terms and Conditions of XYZ AG</b>.
</Checkbox>
```

## Long labels

```jsx
<Checkbox>
  The label of the Checkbox can get a very long text which is sometimes needed for
  accepting terms of use or privacy terms. In this case the label wraps nicely and the
  checkbox stays aligned with the first line of the label.
</Checkbox>
```

## Error messages

Currently error messages need to be set manually. The footer is a great place to keep them aligned
with the label:

```jsx
<Checkbox footer={<Status severity="fatal">Please check this checkbox</Status>}>
  Check me
</Checkbox>
```

```jsx
import { Status } from '@db-design/react';
<Checkbox
  footer={
    <>
      <a href="#terms">Read our Terms and Conditions</a>{' '}
      <Status severity="fatal">You must accept the Terms and Conditions</Status>
    </>
  }
>
  I accept the <b>Terms and Conditions</b>.
</Checkbox>;
```
