# Select

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->
## Props

<details>
  <summary class="db-props-toggle">Show/hide component props</summary>
  <table class="db-props-table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>value</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType<"s" | "m" | "l" | "xl"></code></td>
        <td>false</td>
        <td>l</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>disabled</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>options</strong></td>
        <td><code>{ label: ReactNode; value: string; disabled: boolean; }[]</code></td>
        <td>false</td>
        <td>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

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
