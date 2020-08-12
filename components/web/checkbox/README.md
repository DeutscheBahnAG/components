# Checkbox

```js
import { Checkbox } from '@bahn-x/dbx-web';
```

```jsx
<Checkbox label="Checkbox" />
```

## States

### Checked

```jsx
<Checkbox label="Checkbox unchecked" />
```

```jsx
<Checkbox checked label="Checkbox checked" />
```

### Indeterminate

The indeterminate state does not show if the Checkbox is checked or not. When you click the Checkbox, it will change its [state](#states). The first example will change to checked, the second example will change to unchecked when clicking the Checkbox.

```jsx
<Checkbox indeterminate label="Checkbox indeterminate unchecked" />
```

```jsx
<Checkbox indeterminate checked label="Checkbox indeterminate checked" />
```

### Disabled

```jsx
<Checkbox disabled label="Disabled Checkbox" />
```

```jsx
<Checkbox disabled checked label="Disabled Checkbox" />
```

## Links within the label

Links can be used within the label. Clicking the link won’t change the [state](#states) of the Checkbox. Make sure to style the link properly or use a link component.

```jsx
<Checkbox
  label={
    <>
      I accept the{` `}
      <a href="#terms">Terms and Conditions</a>.
    </>
  }
/>
```

## Long labels

```jsx
<Checkbox label="The label of the Checkbox can get a very long text which is sometimes needed for accepting terms of use or privacy terms. In this case the label wraps nicely and the checkbox stays aligned with the first line of the label." />
```
