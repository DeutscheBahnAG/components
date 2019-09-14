# Textfield

```js
import Textfield from '@bahn-x/dbx-textfield';
```

```jsx +jsxpreview +highlight="Textfield"
<Textfield />
```

## HTML attributes

All attributes of an HTML [\<input\> field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) or [\<textarea\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Attributes) can be used with the `Textfield` component:

```jsx +jsxpreview +highlight=/size=".+?"/,/value=".+?"/
<Textfield size="8" value="12" />
```

```jsx +jsxpreview +highlight=/type=".+?"/,/rows=".+?"/
<Textfield type="textarea" rows="4" />
```

```jsx +jsxpreview +highlight=/spellCheck=".+?"/,/C/
<Textfield spellCheck="false" />
```

Be aware of the title case spelling of some properties like `spellCheck`.

## Units, prefixes and suffixes

A unit such as a currency can be displayed inside the Textfield but outside the editable area.

```jsx +jsxpreview +highlight=/unit=".+?"/ .right
<Textfield unit="€" />
```

Typically it makes sense to use `type="number"` in combination with units:

```jsx +jsxpreview +highlight=/unit=".+?"/,/type="number"/ .right
<Textfield unit="€" type="number" />
```

For some units (like `£`), it is required to display the unit before the input. To avoid researching this logic and keep applications consistent, the Textfield component takes care of deciding wether the unit should be put before or after the input:

```jsx +jsxpreview +highlight=/£/ .right
<Textfield unit="£" />
```

For technical reasons you might want to add a `prefix`. For example:

```jsx +jsxpreview +highlight=/prefix=".+?"/ +showmore=1..1 .right
Your Twitter account:
<Textfield prefix="@" />
```

```jsx +jsxpreview +highlight=/suffix=".+?"/ +showmore=1..1 .right
Your internal email address:
<Textfield suffix="@bahn-x.de" />
```

**Warning:** Do not use `prefix` and/or `suffix` in combination with `unit`. Using both – a `prefix` and a `suffix` but no `unit` is fine. <?: .warning ?>

## States

### Disabled

```jsx +jsxpreview +highlight="disabled" .columns
<Textfield disabled />
```

```jsx +jsxpreview +highlight="disabled" .columns
<Textfield disabled value="Disabled" />
```

### Read only

```jsx +jsxpreview +highlight="readOnly" .columns
<Textfield readOnly />
```

```jsx +jsxpreview +highlight="readOnly" .columns
<Textfield readOnly value="Read only" />
```
