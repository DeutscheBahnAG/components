# Status

```jsx
<Status>This is a status</Status>
```

## Variants

### Success

```jsx
<Status severity={Status.severities.SUCCESS}>This feature is included</Status>
```

### Info

```jsx
<Status severity={Status.severities.INFORMATIVE}>Works as expected</Status>
```

### Warning

```jsx
<Status severity={Status.severities.WARNING}>
  This feature is not included
</Status>
```

### Error

```jsx
<Status severity={Status.severities.ERROR}>
  You might not reach a connecting train
</Status>
```

### Fatal

```jsx
<Status severity={Status.severities.FATAL}>The train got cancelled</Status>
```

## Tests

### Long text

```jsx
<Status>
  The message of the Status can get a very long text which is sometimes needed.
  In this case the label wraps nicely and the checkbox stays aligned with the
  first line of the label.
</Status>
```
