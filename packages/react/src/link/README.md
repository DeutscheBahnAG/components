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
  <Link href="" iconPosition={Link.iconPositions.NONE}>
    Link
  </Link>
  <Link href="">Link</Link>
  <Link href="https://www.bahn.de">Link</Link>
  <Link href="" download>
    Link
  </Link>
  <Link href="" variant={Link.variants.SECONDARY}>
    Link
  </Link>
  <Link href="" variant={Link.variants.MIXED}>
    Link
  </Link>
</>;
```

## Variants

### Primary

```jsx
<Link href="#">Link</Link>
```

### Secondary

```jsx
<Link href="#" variant={Link.variants.SECONDARY}>
  Link
</Link>
```

### Mixed

```jsx
<Link href="#" variant={Link.variants.MIXED}>
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
<Link icon={<ActionSettings />} iconPosition={Link.iconPositions.BEFORE}>
  Settings
</Link>;
```

```jsx
import { ActionLogOut } from '@db-design/react-icons';
<Link icon={<ActionLogOut />} iconPosition={Link.iconPositions.AFTER}>
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
<Link href="" iconPosition={Link.iconPositions.NONE}>
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
<Link disabled onClick={() => {}} variant={Link.variants.SECONDARY}>
  Link
</Link>
```

Disabled links usually do not make sense. Please avoid them. They only work, when the link technically is a `<button>` (e.g. by setting `onClick`).

You cannot disable ‘real’ links (`<a>`):

```jsx
<Link disabled href="" variant={Link.variants.SECONDARY}>
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
  <Link type={Link.types.SUBMIT}>Link</Link>
</form>
```

### Using Next.js

As Next.js requires to set the `href` in a parent element, the `Link` will not recognize automatically that it’s a link (= `<a>`) and render as a `<button>`. Therefore, the `type` must be set manually:

```jsx static
import NextLink from 'next/link';
import { Link } from '@db-design/react';

<NextLink href="/">
  <Link type={Link.types.LINK}>Link</Button>
</NextLink>;
```

Think twice if you really want this to look like a link. [Button](/#/Components/Interactive/Button) is your friend.

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
  <Textfield size={Textfield.sizes.XL} value="Textfield" />
  <Button size={Button.sizes.XL}>Button</Button>
  <Button size={Button.sizes.M} variant={Button.variants.SOLID}>
    Button
  </Button>
  <span>Some text</span>
  {/* at least a <span>/<b>/… should be put around plain text */}
  <hr
    style={{
      border: '#73aef4 dashed',
      borderWidth: '1px 0 0',
      marginTop: '-23px',
      position: 'absolute',
      width: '768px',
      pointerEvents: 'none',
    }}
  />
  <hr
    style={{
      border: '#b4d5f6 dashed',
      borderWidth: '1px 0',
      marginTop: '-57px',
      position: 'absolute',
      height: '58px',
      width: '768px',
      pointerEvents: 'none',
    }}
  />
</>;
```