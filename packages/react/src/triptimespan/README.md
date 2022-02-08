# Triptimespan

Displays an arrival _and_ departure time ensuring a consistent styling across DB products.

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
        <td><strong>departureDateTime</strong></td>
        <td><code>string</code></td>
        <td>true</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>predictedDepartureDateTime</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>arrivalDateTime</strong></td>
        <td><code>string</code></td>
        <td>true</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>predictedArrivalDateTime</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
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
<Triptimespan departureDateTime="09:54" arrivalDateTime="12:48" />
```

## Delayed departure

```jsx
<Triptimespan
  departureDateTime="09:54"
  predictedDepartureDateTime="09:57"
  arrivalDateTime="12:48"
/>
```

## Delayed arrival

```jsx
<Triptimespan
  departureDateTime="09:54"
  arrivalDateTime="12:48"
  predictedArrivalDateTime="12:49"
/>
```

## Delayed departure and arrival

```jsx
<Triptimespan
  departureDateTime="09:54"
  predictedDepartureDateTime="09:57"
  arrivalDateTime="12:48"
  predictedArrivalDateTime="13:07"
/>
```

## Smaller size

Using a `<Copy>` with size `s`:

```jsx
import { Copy } from '@db-design/react';
<Copy size="s">
  <Triptimespan
    departureDateTime="09:54"
    predictedDepartureDateTime="09:57"
    arrivalDateTime="12:48"
    predictedArrivalDateTime="13:07"
  />
</Copy>;
```
