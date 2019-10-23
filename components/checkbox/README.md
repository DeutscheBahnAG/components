# Checkbox

```js
import Checkbox from '@bahn-x/dbx-checkbox';
```

```jsx +jsxpreview +highlight="Checkbox"
<Checkbox label="Checkbox" />
```

## States

### Checked

```jsx +jsxpreview .columns
<Checkbox label="Checkbox unchecked" />
```

```jsx +jsxpreview +highlight="checked" .columns
<Checkbox checked label="Checkbox checked" />
```

### Indeterminate

The indeterminate state does not show if the Checkbox is checked or not. When you click the Checkbox, it will change its [state](#states). The first example will change to checked, the second example will change to unchecked when clicking the Checkbox.

```jsx +jsxpreview +highlight="indeterminate" .columns
<Checkbox indeterminate label="Checkbox indeterminate unchecked" />
```

```jsx +jsxpreview +highlight="indeterminate","checked" .columns
<Checkbox indeterminate checked label="Checkbox indeterminate checked" />
```

### Disabled

```jsx +jsxpreview +highlight="disabled" .columns
<Checkbox disabled label="Disabled Checkbox" />
```

```jsx +jsxpreview +highlight="disabled" .columns
<Checkbox disabled checked label="Disabled Checkbox" />
```

## Links within the label

Links can be used within the label. Clicking the link won’t change the [state](#states) of the Checkbox. Make sure to style the link properly or use a link component.

```jsx +jsxpreview +highlight=/<a.+a>/
<Checkbox label={<>I accept the{` `}<a href="#terms">Terms and Conditions</a>.</>} />
```

## Long labels

```jsx +jsxpreview +highlight=/<a.+a>/
<Checkbox label="The label of the Checkbox can get a very long text which is sometimes needed for accepting terms of use or privacy terms. In this case the label wraps nicely and the checkbox stays aligned with the first line of the label." />
```
