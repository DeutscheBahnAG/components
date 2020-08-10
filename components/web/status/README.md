# Status

```jsx
<Status message="This is a status" />
```

## Variants

### Success

```jsx
<Status message="This feature is included" variant={Status.variants.SUCCESS} />
```

### Info

```jsx
<Status message="Works as expected" variant={Status.variants.INFO} />
```

### Warning

```jsx
<Status
  message="This feature is not included"
  variant={Status.variants.WARNING}
/>
```

### Error

```jsx
<Status
  message="You might not reach a connecting train"
  variant={Status.variants.ERROR}
/>
```

### Fatal

```jsx
<Status message="The train got cancelled" variant={Status.variants.FATAL} />
```

## Tests

### Long text

```jsx
<Status message="The message of the Status can get a very long text which is sometimes needed. In this case the label wraps nicely and the checkbox stays aligned with the first line of the label." />
```
