# Textfield

```js
import { Textfield } from '@db-design/react';
```

```jsx noeditor
import { Copy } from '@db-design/react';
import { JourneyDestination } from '@db-design/react-icons';
<div className="textfield-preview">
  <span>
    <Copy>Examples:</Copy>
  </span>
  <span className="db-inline-spacer" />
  <Textfield value="Textfield" />
  <Textfield inlineLabel="Maximum" unit="€" value="19.99" type="number" />
  <Textfield inlineLabel="Username" />
  <Textfield prefix={<JourneyDestination />} value="Köln" />
  <style>{`.textfield-preview .db-textfield { width: 136px }`}</style>
</div>;
```

## HTML attributes

All attributes of an HTML [<input\> field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) or [<textarea\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Attributes) can be used with the `Textfield` component:

```jsx
<Textfield value="12" />
```

```jsx
<Textfield type="textarea" rows="4" />
```

```jsx
<Textfield htmlSize="5" />
```

Instead of `size`, `htmlSize` must be used, when limiting the field’s width based on characters.

```jsx
<Textfield spellCheck="false" />
```

Be aware of the title case spelling of some properties like `spellCheck`.

## Units, prefixes and suffixes

A unit such as a currency can be displayed inside the Textfield but outside the editable area.

```jsx
<Textfield unit="€" />
```

Typically it makes sense to use `type="number"` in combination with units:

```jsx
<Textfield unit="€" type="number" />
```

For some units (like `£`), it is required to display the unit before the input. To avoid researching this logic and keep applications consistent, the Textfield component takes care of deciding wether the unit should be put before or after the input:

```jsx
<Textfield unit="£" />
```

For technical reasons you might want to add a `prefix`. For example:

```jsx
<>
  Your Twitter account:
  <br />
  <Textfield prefix="@" />
</>
```

```jsx
<>
  Your internal email address:
  <br />
  <Textfield suffix="@deutschebahn.com" />
</>
```

**Warning:** Do not use `prefix` and/or `suffix` in combination with `unit`. Using both – a `prefix` and a `suffix` but no `unit` is fine.

## Icons

Any icon can be used as a `prefix` or `suffix`. In most cases it makes sense to use them as a `prefix`:

```jsx
import { JourneyDestination } from '@db-design/react-icons';
<Textfield prefix={<JourneyDestination />} />;
```

## Actions

Any icon can be used as a `prefix` or `suffix`. In most cases it makes sense to use them as a `prefix`:

```jsx
import { Button } from '@db-design/react';
import { NavigationClose } from '@db-design/react-icons';
<Textfield
  size="l"
  suffix={
    <Button variant="hover-only" shape="round" size="s" icon={<NavigationClose />}>
      Clear
    </Button>
  }
/>;
```

Important: Make sure the `size` of the Button (e.g. `s`) is two steps smaller than the `size` of the Textfield (e.g. `l`).

In very special use cases it is also possible to visually put a Button into the Textfield (maybe validating/formatting/copying an input). Before using this possibility, think about if this can’t automatically happen `onBlur`.

```jsx
import { Button } from '@db-design/react';
<Textfield
  size="l"
  value="Some user input"
  suffix={
    <Button variant="solid" size="s">
      Do something
    </Button>
  }
/>;
```

## States

### Disabled

```jsx
<Textfield disabled />
```

```jsx
<Textfield disabled value="Disabled" />
```

### Read only

```jsx
<Textfield readOnly />
```

```jsx
<Textfield readOnly value="Read only" />
```

## Placeholder

```jsx
<Textfield placeholder="+49 30 12345" />
```

Use the `placeholder` property to indicate how the input should look like.

Do not misuse the `placeholder` as label. Use `inlineLabel` for a similar effect instead.

## Inline label

For some cases (e.g. a login form), it might make sense to use inline labels.
The DB Textfield offers full support.

Inline labels will cover the Textfield until it got filled out. Then they’ll
move on top of the input in a beautiful transition.

```jsx
<Textfield inlineLabel="Username" value="lea151" />
```

You can use inline Textfields in combination with other attributes:

```jsx
<Textfield prefix="@" inlineLabel="Twitter account" />
```

```jsx
<Textfield suffix="@deutschebahn.com" inlineLabel="Email address" />
```

```jsx
<Textfield disabled value="Disabled" inlineLabel="Twitter account" />
```

```jsx
<Textfield readOnly value="my.name" suffix="@deutschebahn.com" inlineLabel="Email address" />
```

It is possible to combine `inlineLabel` and `placeholder`. Click inside the Textfield to see:

```jsx
<Textfield
  placeholder="firstname.lastname"
  suffix="@deutschebahn.com"
  inlineLabel="Email address"
/>
```

## Sizing

```jsx
<Textfield size="s" />
```

```jsx
<Textfield size="m" />
```

```jsx
<Textfield size="l" />
```

```jsx
<Textfield size="xl" />
```

Info: The `size` property will be ignored when using `inlineLabel` and will be fixed to `xl`.

## Aligning Textfields

Text, Textfield, Button and Link **automatically align well** next to each other without any wrapper/extra CSS needed:

```jsx
import { Button, Link } from '@db-design/react';
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
      width: '768px',
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
      width: '768px',
      pointerEvents: 'none',
    }}
  />
</>;
```
