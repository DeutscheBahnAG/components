# Display (typography)

```js
import { Display } from '@db-design/react';
```

Huge text sizes mainly for marketing and design-driven projects for maximum flexibility.

```jsx
<Display>Great content</Display>
```

## Size

```jsx
<Display size="xxl">Display in size XXL</Display>
```

```jsx
<Display size="xl">Display in size XL</Display>
```

```jsx
<Display size="l">Display in size L</Display>
```

```jsx
<Display size="m">Display in size M</Display>
```

```jsx
<Display size="s">Display in size S</Display>
```

```jsx
<Display size="xs">Display in size XS</Display>
```

## Weight

```jsx
<Display light>Light Display</Display>
```

## Usage

The `<Display>` component adds the text style only. It is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

```jsx
<h1>
  <Display size="xl">Display in an h1.</Display>
</h1>
```

```jsx
<h2>
  <Display size="xl">Display in an h2.</Display>
</h2>
```

```jsx
<h2>
  <Display size="m">Medium headline in an h2.</Display>
</h2>
```
