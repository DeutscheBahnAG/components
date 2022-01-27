# Track

Shows the track (platform) number for a trip in the default style of Deutsche Bahn.

This component parses and formats the track information with typographic rules.

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
        <td><strong>track</strong></td>
        <td><code>string</code></td>
        <td>true</td>
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
    <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;xs&quot; | &quot;s&quot; | &quot;m&quot;&gt;</code></td>
        <td>false</td>
        <td>xs</td>
        <td></td>
      </tr>
    <tr>
        <td><strong>labels</strong></td>
        <td><code>{ platform: string; platformAbbreviation: string; }</code></td>
        <td>false</td>
        <td>{ platform: 'Gleis', platformAbbreviation: 'Gl.' }</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

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
