# Title (typography)

```js
import { Title } from '@bahn-x/dbx-web';
```

```jsx
<Title>Great content</Title>
```

## Size

```jsx
<Title size={Title.sizes.XXL}>Title in size XXL</Title>
```

```jsx
<Title size={Title.sizes.XL}>Title in size XL</Title>
```

```jsx
<Title size={Title.sizes.L}>Title in size L</Title>
```

```jsx
<Title size={Title.sizes.M}>Title in size M</Title>
```

```jsx
<Title size={Title.sizes.S}>Title in size S</Title>
```

## Weight

```jsx
<Title light>Light Title</Title>
```

## Usage

The `<Title>` component adds the text style only. It is recommended to wrap it in a `<h1>` or other HTML element depending on your needs.

```jsx
<h1>
  <Title size={Title.sizes.XXL}>Title in a h1.</Title>
</h1>
```

```jsx
<h2>
  <Title size={Title.sizes.XXL}>Title in a h2.</Title>
</h2>
```

```jsx
<h2>
  <Title size={Title.sizes.M}>Medium title in a h2.</Title>
</h2>
```
