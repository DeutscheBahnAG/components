# Textfield

## HTML attributes

All attributes of an HTML [\<input\> field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) or [\<textarea\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Attributes) can be used with the `Textfield` component:

```jsx
<Textfield size="8" />
```

```jsx
<Textfield spellcheck="false" />
```

```jsx
<Textfield type="textarea" rows="8" />
```

## Units, prefixes and suffixes

A unit such as a currency can be displayed inside the Textfield but outside the editable area.

```jsx
<Textfield unit="€" />
```

Typically it makes sense to use `type="number"` in combination with units:

```jsx
<Textfield unit="€" />
```

Fot some units (like `£`), it is required to display the unit before the input. To avoid researching this logic and keep applications consistent, the Textfield component takes care of deciding wether the unit should be put before or after the input:

```jsx
<Textfield unit="£" />
```

For technical reasons you might want to add a `prefix`. For example:

```jsx
Your Twitter account:
<Textfield prefix="@" />
```

```jsx
Your internal email address:
<Textfield suffix="@bahn-x.de" />
```

**Warning:** Do not use `prefix` and/or `suffix` in combination with `unit`. Using both – a `prefix` and a `suffix` but no `unit` is fine.