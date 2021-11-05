# Select

## Simple Select

```jsx
<Select
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```

## Simple Select with selected option

```jsx
<Select
  value={2}
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```

## Disabled Select

```jsx
<Select
  disabled
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```

## Select with disabled option

```jsx
<Select
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
    { value: 3, label: 'Lions', disabled: true },
  ]}
/>
```

## Sizing

```jsx
<Select
  size="s"
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```

```jsx
<Select
  size="m"
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```

```jsx
<Select
  size="l"
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```

```jsx
<Select
  size="xl"
  options={[
    { value: 1, label: 'Cats' },
    { value: 2, label: 'Dogs' },
  ]}
/>
```
