# Passwordfield

```js
import { Passwordfield } from '@bahn-x/react';
```

```jsx
<Passwordfield />
```

## Disabled

```jsx
<Passwordfield disabled />
```

```jsx
<Passwordfield disabled value="Disabled" />
```

```jsx
<Passwordfield disabled inlineLabel="Password" value="Disabled" />
```

## Inline label

For rare cases (e.g. a login form), it might make sense to use inline labels.
The DBX Passwordfield offers full support.

Inline labels will cover the Passwordfield until it got filled out. Then they’ll
move on top of the input.

```jsx
<Passwordfield inlineLabel="Password" />
```

```jsx
<Passwordfield inlineLabel="Password" value="lea151" />
```

## Sizing

```jsx
<Passwordfield size={Passwordfield.sizes.M} />
```

```jsx
<Passwordfield size={Passwordfield.sizes.L} />
```

```jsx
<Passwordfield size={Passwordfield.sizes.XL} />
```

Info: The `size` property will be ignored when using `inlineLabel` and will be fixed to `XL`.
