# Icon

A collection of icons with focus on building user interfaces for travel-related applications.

You can import all icons at once:

```jsx
import * as Icons from '@db-design/react-icons';

<Icons.TicketBahncard />;
```

In order to reduce your bundle size, you can also import the individual icon files like below:

```jsx
import { ActionSettings, SeatWindow } from '@db-design/react-icons';

<>
  <ActionSettings />
  <SeatWindow />
</>;
```

## Sizing

The icons are already exported in the correct size they should be used with.
The sizes are optimized to be interoperable with other DB components (e.g., icons in buttons) and should not be altered.

## Setting the icon colour

The icons are exported to be displayed in the CSS `currentColor` value, so they will adopt the (text) colour of their parent element.
This ensures that icon colours can also be animated, e.g., for hover effects.
To set the icon colour, simply set the `color` attribute on the parent:

```jsx
import { ActionSettings } from '@db-design/react-icons';

<>
  <span style={{ color: '#e93e8f' }}>
    <ActionSettings />
  </span>

  <span style={{ color: '#309fd1' }}>
    <ActionSettings />
  </span>
</>;
```

## Setting an icon title

For accessibility reasons, icons should always have a textual representation. If you do not want a visible text next to the icon (such as on a button), you can set a `title` that is read by screenreader programs and will be visible when you hover over the icon. You also need to provide an unique `titleId` for all screen readers to read the title correctly:

```jsx static
import { TicketBahncard } from '@db-design/react-icons';
<TicketBahncard title="BahnCard" titleId="icon-bahncard-title" />;
```

If `title` and optionally `titleId` are set, an SVG `<title>` element will be created within the `<svg>`.

## Accessing the rendered `<svg>` element

You can access the rendered `<svg>` element in two ways:

1. the component forwards all props (except `title` and `titleId`) to the `<svg>` tag for special cases like setting custom data or aria attributes.

```jsx static
import { TicketBahncard } from '@db-design/react-icons';
<TicketBahncard data-description="awesome" />;
```

2. the component also forwards its ref to the `<svg>` tag to access the rendered DOM element:

```jsx static
import React { useRef, useEffect } from 'react';
import { ActionSettings } from '@db-design/react-icons';

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
    <ActionSettings ref={settingsIconRef} />
  );
}
```
