# Track

Shows the track (platform) number for a trip in the default style of Deutsche Bahn.

This component parses and formats the track information with typographic rules.

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->

<!-- END props-table -->

## Basic usage

```jsx
<Track track="1" />
```

### Fragment

In some train stations two trains can hold the same time on the same track. Usually this track
is split into two fragments called “a” and “b” (using lowercase characters).

```jsx
<Track track="2a" />
```

### Section

This is the parking position of the train in uppercase characters.

```jsx
<Track track="3 B-E" />
```

### Prefix

```jsx
<Track track="Fern 1" />
```

## Sizing

```jsx
<Track track="1" size="m" />
```

## Translations

```jsx
<Track track="1" labels={{ platform: 'Platform', platformAbbreviation: 'Pl.' }} />
```
