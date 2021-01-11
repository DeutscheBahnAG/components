# Icon

A collection of icons with focus on building user interfaces for travel-related applications.

You can import all icons at once:

```jsx
import * as Icons from '@bahn-x/dbx-icons';

<Icons.TicketBahncard />;
```

In order to reduce your bundle size, you can also import the individual icon files like below:

```jsx
import SettingsIcon from '@bahn-x/dbx-icons/dist/settings';
import SeatWindowIcon from '@bahn-x/dbx-icons/dist/seat-window';

<SettingsIcon />
<SeatWindowIcon />
```

You can also import icons from the package directly:

```tsx
import { SettingsIcon } from '@bahn-x/dbx-icons';
import { SeatWindowIcon } from '@bahn-x/dbx-icons';

<SettingsIcon />
<SeatWindowIcon />
```

## Sizing

The icons are already exported in the correct size they should be used with.
The sizes are optimized to be interoperable with other DBX components (e.g. icons in buttons) and should not be altered.

## Setting the icon color

The icons are exported to be displayed in the CSS `currentColor` value, so they will adopt the (text) color of their parent element.
This ensures that icon colors can also be animated, e.g. for hover effects.
To set the icon color, simply set the `color` attribute on the parent:

```jsx
<div className="success-icon-parent">
  <Icon.AlertSuccess />
</div>
```

```css
.success-icon-parent {
  color: dbx-color('success');
}
```

## Setting an icon title

For accessibility reasons, icons should always have a textual representation. If you do not want a visible text next to the icon (such as on a button), you can set a `title` that is read by screenreader programs and will be visible when you hover over the icon. You also need to provide an unique `titleId` for all screen readers to read the title correctly:

```jsx
<Icon.TicketBahncard title="BahnCard" titleId="icon-bahncard-title" />
```

## Accessing the rendered `<svg>` element

You can access the rendered `<svg>` element in two ways:

1. the component forwards all props (except `title` and `titleId`) to the `<svg>` tag for special cases like setting custom data or aria attributes.

```jsx
<Icon.TicketBahncard data-description="awesome" />
```

2. the component also forwards its ref to the `<svg>` tag to access the rendered DOM element:

```jsx
import React { useRef, useEffect } from 'react';
import { SettingsIcon } from '@bahn-x/dbx-icons';

const MyComponent = () => {
  const settingsIconRef = useRef();

  useEffect(() => {
    if (settingsIconRef.current) {
      // This will contain a reference to the <svg> node,
      // you can do with it what you like :)
      const svgElement = settingsIconRef.current;
    }
  });

  return (
    <SettingsIcon ref={settingsIconRef} />
  );
}
```
