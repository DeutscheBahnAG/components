# Link

```js
import { Link } from '@db-design/react';
```

This component handles everthing that ‘looks like a link’ – even when it’s technically a button (JavaScript interaction). Links that should look like a button must use the [Button component](/#/Components/Interactive/Button).

```jsx noeditor
import { Copy } from '@db-design/react';
<>
  <span>
    <Copy>Examples:</Copy>
  </span>
  <span className="db-inline-spacer" />
  <Link href="" iconPosition="none">
    Link
  </Link>
  <Link href="">Link</Link>
  <Link href="https://www.bahn.de">Link</Link>
  <Link href="" download>
    Link
  </Link>
  <Link href="" variant="secondary">
    Link
  </Link>
  <Link href="" variant="mixed">
    Link
  </Link>
</>;
```

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->

<!-- END props-table -->

## Variants

### Primary

```jsx
<Link href="#">Link</Link>
```

### Secondary

```jsx
<Link href="#" variant="secondary">
  Link
</Link>
```

### Mixed

```jsx
<Link href="#" variant="mixed">
  Link
</Link>
```

## Icon types

Icons are chosen automatically based on the `href` or `download` properties:

```jsx
<Link href="/internal">Internal link</Link>
```

```jsx
<Link href="https://www.bahn.de/">External link</Link>
```

```jsx
<Link href="info.pdf" download>
  Download me
</Link>
```

## Icons

Icons can be added as SVG. They must match the [DB Icon specifications](https://dpp.bahn-x.de/foundation/icons) (24 × 24 px incl. 2 px safe area).

```jsx
import { ActionHeart } from '@db-design/react-icons';
<Link icon={<ActionHeart />}>Link</Link>;
```

## Icon position

By default, icons are placed before the link text. This can be controlled manually:

```jsx
import { ActionSettings } from '@db-design/react-icons';
<Link icon={<ActionSettings />}>Settings</Link>;
```

```jsx
import { ActionSettings } from '@db-design/react-icons';
<Link icon={<ActionSettings />} iconPosition="before">
  Settings
</Link>;
```

```jsx
import { ActionLogOut } from '@db-design/react-icons';
<Link icon={<ActionLogOut />} iconPosition="after">
  Log out
</Link>;
```

## No icon

By default, an icon is automatically set by the type of link:

```jsx
<Link href="">Link</Link>
```

Remove the icon entirely:

```jsx
<Link href="" iconPosition="none">
  Link
</Link>
```

## States

### Disabled

Disabled Links always look the same, independent of the `variant`.

```jsx
<Link disabled onClick={() => {}}>
  Link
</Link>
```

```jsx
<Link disabled onClick={() => {}} variant="secondary">
  Link
</Link>
```

Disabled links usually do not make sense. Please avoid them. They only work, when the link technically is a `<button>` (e.g. by setting `onClick`).

You cannot disable ‘real’ links (`<a>`):

```jsx
<Link disabled href="" variant="secondary">
  Link
</Link>
```

## Semantic

The Link can make use of different semantics while keeping the same style. All attributes mentioned above can be combined with the semantics.

### Link Links for call to actions:

```jsx
<Link href="#">Link</Link>
```

### Default click Links for JavaScript interaction:

```jsx
<Link onClick={alert}>Link</Link>
```

### Combined Links

When both properties are set, a link (= `<a>`) gets rendered. The `onClick` still gets fired (e.g. for tracking links):

```jsx
<Link href="#" onClick={alert}>
  Link
</Link>
```

### Submit Links for forms:

```jsx
<form action="#">
  {/* <Textfield /> */}
  <Link type="submit">Link</Link>
</form>
```

Think twice if you really want this to look like a link. [Button](/#/Components/Interactive/Button) is your friend.

## Using Next.js

Since Next.js requires the `href` to be set in a wrapper link component, the actual `Link` must have the `href` passed through. To do this, use the [`passHref`](https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag) switch in the Next.js link wrapper:

```jsx static
import NextLink from 'next/link';
import { Link } from '@db-design/react';

<NextLink href="/" passHref>
  <Link>Link</Link>
</NextLink>;
```

## Aligning Links

Links put next to each other automatically add spacing between each other:

```jsx
<>
  <Link>Link 1</Link>
  <Link>Link 2</Link>
  <Link>Link 3</Link>
</>
```

This spacing is independent of spacing. The next example has an additional space character added to the DOM, but visually results in the same spacing:

```jsx
<>
  <Link>Link 1</Link> <Link>Link 2</Link> <Link>Link 3</Link>
</>
```

Text, Textfield, Button and Link **automatically align well** next to each other without any wrapper/extra CSS needed:

```jsx
import { Textfield, Button } from '@db-design/react';
<>
  <Link>Link</Link>
  <Textfield size="xl" value="Textfield" />
  <Button size="xl">Button</Button>
  <Button size="m" variant="solid">
    Button
  </Button>
  <span>Some text</span>
  {/* at least a <span>/<b>/… should be put around plain text */}
  <hr
    style={{
      border: '#73aef4 dashed',
      borderWidth: '1px 0 0',
      marginTop: '-20px',
      position: 'absolute',
      width: '736px',
      pointerEvents: 'none',
    }}
  />
  <hr
    style={{
      border: '#b4d5f6 dashed',
      borderWidth: '1px 0',
      marginTop: '-53px',
      position: 'absolute',
      height: '54px',
      width: '736px',
      pointerEvents: 'none',
    }}
  />
</>;
```

## Access DOM via Ref

You can use a [Ref](https://reactjs.org/docs/refs-and-the-dom.html) to access the DOM node of the Link or Button:

```jsx static
const RefExample = () => {
  const linkRef = React.useRef(null);
  React.useEffect(() => {
    if (linkRef.current) {
      console.log('Link reference to DOM node:', linkRef.current);
    }
  });
  return (
    <Link ref={linkRef} href="https://dpp.bahn-x.de">
      A Link
    </Link>
  );
};
<RefExample />;
```

Note that the referred DOM node is either an anchor link or a button, depending on Link props described in the sections above.
