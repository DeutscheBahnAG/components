# Triptime

Displays an arrival or departure time ensuring a consistent styling across DB products.

This component implements the guidelines of:

- https://dpp.bahn-x.de/content/german-writing/zeitangaben
- https://ux-guide.deutschebahn.com/document/148

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
        <td><strong>dateTime</strong></td>
        <td><code>string</code></td>
        <td>true</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>predictedDateTime</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>stopType</strong></td>
        <td><code>&quot;start&quot; | &quot;intermediate&quot; | &quot;destination&quot; | &quot;current&quot;</code></td>
        <td>false</td>
        <td>start</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Default

```jsx
<Triptime dateTime="09:54" />
```

## Triptime with short delay

```jsx
<Triptime dateTime="09:54" predictedDateTime="09:57" />
```

## Triptime with long delay

```jsx
<Triptime dateTime="09:54" predictedDateTime="10:04" />
```

## Triptime start

```jsx
<Triptime stopType="start" dateTime="09:54" predictedDateTime="09:57" />
```

## Triptime destination

```jsx
<Triptime stopType="destination" dateTime="09:54" predictedDateTime="09:57" />
```

## Triptime intermediate

```jsx
<Triptime stopType="intermediate" dateTime="09:54" predictedDateTime="09:57" />
```

## Triptime current

```jsx
<Triptime stopType="current" dateTime="09:54" predictedDateTime="09:57" />
```
