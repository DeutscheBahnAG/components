# Triptimespan

Displays an arrival _and_ departure time ensuring a consistent styling across DB products.

This component implements the guidelines of:

- https://dpp.bahn-x.de/content/german-writing/zeitangaben
- https://ux-guide.deutschebahn.com/document/148

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
  predictedArivalDateTime="12:49"
/>
```

## Delayed departure and arrival

```jsx
<Triptimespan
  departureDateTime="09:54"
  predictedDepartureDateTime="09:57"
  arrivalDateTime="12:48"
  predictedArivalDateTime="13:07"
/>
```

## Smaller size

Using `copy.s`

```jsx
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';

<p
  style={{
    fontSize: `${tokens.textsize['copy.s']}px`,
    lineHeight: `${tokens.lineheight['copy.s']}px`,
  }}
>
  <Triptimespan
    departureDateTime="09:54"
    predictedDepartureDateTime="09:57"
    arrivalDateTime="12:48"
    predictedArivalDateTime="13:07"
  />
</p>;
```
