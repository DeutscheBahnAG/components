# Triptime

Displays an arrival or departure time ensuring a consistent styling across DB products.

This component implements the guidelines of:

- https://dpp.bahn-x.de/content/german-writing/zeitangaben
- https://ux-guide.deutschebahn.com/document/148

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
