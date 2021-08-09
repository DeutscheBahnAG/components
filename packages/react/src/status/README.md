# Status

```jsx
<Status message="This is a status" />
```

## Variants

### Success

```jsx
<Status
  message="This feature is included"
  severity={Status.severities.SUCCESS}
/>
```

### Info

```jsx
<Status message="Works as expected" severity={Status.severities.INFORMATIVE} />
```

### Warning

```jsx
<Status
  message="This feature is not included"
  severity={Status.severities.WARNING}
/>
```

### Error

```jsx
<Status
  message="You might not reach a connecting train"
  severity={Status.severities.ERROR}
/>
```

### Fatal

```jsx
<Status message="The train got cancelled" severity={Status.severities.FATAL} />
```

## Tests

### Long text

```jsx
<Status message="The message of the Status can get a very long text which is sometimes needed. In this case the label wraps nicely and the checkbox stays aligned with the first line of the label." />
```
