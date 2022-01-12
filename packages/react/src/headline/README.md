# Headline (typography)

```js
import { Headline } from '@db-design/react';
```

Default headline sizes for all, especially content-driven websites.

```jsx
<Headline>Great content</Headline>
```

## Size

```jsx
<Headline size="xl">Headline in size XL</Headline>
```

```jsx
<Headline size="l">Headline in size L</Headline>
```

```jsx
<Headline size="m">Headline in size M</Headline>
```

```jsx
<Headline size="s">Headline in size S</Headline>
```

## Weight

```jsx
<Headline light>Light Headline</Headline>
```

## Secondary

```jsx
<Headline variant="secondary">Secondary Headline</Headline>
```

## Usage

The `<Headline>` component adds the text style only. It is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

```jsx
<h1>
  <Headline size="xl">Headline in an h1.</Headline>
</h1>
```

```jsx
<h2>
  <Headline size="xl">Headline in an h2.</Headline>
</h2>
```

```jsx
<h2>
  <Headline size="m">Medium headline in an h2.</Headline>
</h2>
```
