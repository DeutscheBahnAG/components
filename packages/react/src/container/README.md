# Container

A container/box/background/layout component to control:

- the width of the content
- paddings
- margins
- gaps
- horzontal alignments
- background colours
- amount of columns

All properties accept responsive values which makes this component the most important component for responsive design without having to write a single line of (S)CSS.

Containers can be nested in another Container for flexible layouts.

<style>
  main {
    margin-right: 96px !important;
    box-sizing: border-box;
    max-width: calc(100% - 2 * 96px) !important;
  }

  main [class^='rsg--preview-'] {
    border-radius: 0 !important;
    padding: 16px 0 !important;
  }
</style>

## Imports

```js
import { Container } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/container';
```

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
        <td><strong>children</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>Content of the Container</p></td>
      </tr>
      <tr>
        <td><strong>width</strong></td>
        <td><code>ResponsiveType&lt;&quot;text&quot; | &quot;content&quot; | &quot;extended&quot; | &quot;full&quot;&gt;</code></td>
        <td>false</td>
        <td>full</td>
        <td><p>The width of the Container</p></td>
      </tr>
      <tr>
        <td><strong>align</strong></td>
        <td><code>ResponsiveType&lt;&quot;left&quot; | &quot;center&quot; | &quot;right&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>The alignment of the Container</p></td>
      </tr>
      <tr>
        <td><strong>filled</strong></td>
        <td><code>ResponsiveType&lt;boolean&gt;</code></td>
        <td>false</td>
        <td>false</td>
        <td><p>Adds a primary background color for the Container</p></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names you want to add to the Container</p></td>
      </tr>
      <tr>
        <td><strong>verticalMargin</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;auto&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Vertical Margin</p></td>
      </tr>
      <tr>
        <td><strong>horizontalMargin</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;auto&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Horizontal Margin</p></td>
      </tr>
      <tr>
        <td><strong>marginTop</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;auto&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Margin top</p></td>
      </tr>
      <tr>
        <td><strong>marginRight</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;auto&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Margin right</p></td>
      </tr>
      <tr>
        <td><strong>marginBottom</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;auto&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Margin bottom</p></td>
      </tr>
      <tr>
        <td><strong>marginLeft</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;auto&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Margin left</p></td>
      </tr>
      <tr>
        <td><strong>verticalPadding</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Vertical padding</p></td>
      </tr>
      <tr>
        <td><strong>horizontalPadding</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Horizontal padding</p></td>
      </tr>
      <tr>
        <td><strong>paddingTop</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Padding top</p></td>
      </tr>
      <tr>
        <td><strong>paddingRight</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Padding right</p></td>
      </tr>
      <tr>
        <td><strong>paddingBottom</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Padding bottom</p></td>
      </tr>
      <tr>
        <td><strong>paddingLeft</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;m&quot; | &quot;ml&quot; | &quot;l&quot; | &quot;xl&quot; | &quot;xxl&quot; | &quot;xxxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Padding left</p></td>
      </tr>
      <tr>
        <td><strong>columns</strong></td>
        <td><code>ResponsiveType&lt;4 | 3 | 1 | 2 | 5 | 6&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Number of columns</p></td>
      </tr>
      <tr>
        <td><strong>gap</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;ml&quot; | &quot;xxl&quot;&gt;</code></td>
        <td>false</td>
        <td>ml</td>
        <td><p>Column and row gap</p></td>
      </tr>
      <tr>
        <td><strong>rowGap</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;ml&quot; | &quot;xxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Row gap</p></td>
      </tr>
      <tr>
        <td><strong>columnGap</strong></td>
        <td><code>ResponsiveType&lt;&quot;none&quot; | &quot;xs&quot; | &quot;s&quot; | &quot;sm&quot; | &quot;ml&quot; | &quot;xxl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Column gap</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Padding

For pixel values and available t-shirt sizes see also: [Spacings](https://dpp.bahn-x.de/foundation/grid/spacings)

### Horziontal and vertical padding

```jsx
import { Theme } from '@db-design/react';
<Theme theme="DB_LIGHT">
  <Container filled width="content" verticalPadding="s" horizontalPadding="l">
    Content
  </Container>
</Theme>;
```

### Other paddings

`paddingTop`, `paddingRight`, `paddingBottom` and `paddingLeft` can be set individually:

```jsx
import { Theme } from '@db-design/react';
<Theme theme="DB_LIGHT">
  <Container filled width="content" paddingTop="xxxl" paddingLeft="s">
    Content
  </Container>
</Theme>;
```

### Responsive padding

```jsx
import { Theme } from '@db-design/react';
<Theme theme="DB_LIGHT">
  <Container
    filled
    width="content"
    verticalPadding={{ mobile: 'xs', tablet: 's', desktop: 'm' }}
    horizontalPadding={{ mobile: 'm', tablet: 'l' }}
  >
    Content
  </Container>
</Theme>;
```

## Margins

Work exactly like paddings but addionally allow `auto` as value. Usually aligend (`variant`) Containers are are better choice over using `auto`.

For pixel values and available t-shirt sizes see also: [Spacings](https://dpp.bahn-x.de/foundation/grid/spacings)

```jsx
import { Theme } from '@db-design/react';
<Theme theme="DB_LIGHT">
  <Container filled width="content" verticalPadding="s" horizontalPadding="l">
    Content
  </Container>
  <Container
    filled
    width="content"
    verticalPadding="s"
    horizontalPadding="l"
    marginTop="l"
  >
    Content
  </Container>
</Theme>;
```

## Columns

Easily align content in columns (or as a grid if there are more elements than columns). Usually a <Container> with defined columns wraps several <Container> components:

```jsx static
<Container columns="2">
  <Container></Container>
  <Container></Container>
</Container>
```

A complete example:

```jsx
import { Theme } from '@db-design/react';
<Container filled width="full" verticalPadding="m" horizontalPadding="m" columns="2">
  <Theme theme="DB_LIGHT">
    <Container filled width="content" verticalPadding="m" horizontalPadding="m">
      Column 1
    </Container>
  </Theme>
  <Theme theme="DB_LIGHT">
    <Container filled width="content" verticalPadding="m" horizontalPadding="m">
      Column 2
    </Container>
  </Theme>
</Container>;
```

If the items use another theme (different background colour) it is important to wrap each item in its own `<Theme>` component, like in the example above.

The column feature is most useful when using responsive column counts:

```jsx static
<Container ... columns={{ mobile: 1, desktop: 2 }}>
{/* or */}
<Container ... columns={{ mobile: 1, tablet: 2 }}>
{/* or */}
<Container ... columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
```

The gap between items can be controlled in many ways, here are a few examples:

```jsx static
<Container ... gap="sm">
{/* or */}
<Container ... gap={{ mobile: "sm", tablet: "ml" }}>
{/* or */}
<Container ... rowGap={{ mobile: "sm", tablet: "ml" }} columnGap="sm">
```

For pixel values and available t-shirt sizes see also: [Spacings](https://dpp.bahn-x.de/foundation/grid/spacings)

## Centered layout

```jsx
<Container width="full">Content</Container>
```

```jsx
<Container width="extended">Content</Container>
```

```jsx
<Container width="content">Content</Container>
```

```jsx
<Container width="text">Text</Container>
```

## Left-aligned layout

```jsx
import { Layout } from '@db-design/react';
<Layout variant="left-aligned">
  <Container width="content">Content</Container>
</Layout>;
```

```jsx
import { Layout } from '@db-design/react';
<Layout variant="left-aligned">
  <Container width="extended">Content</Container>
</Layout>;
```

```jsx
import { Layout } from '@db-design/react';
<Layout variant="left-aligned">
  <Container width="full">Content</Container>
</Layout>;
```

```jsx
import { Layout } from '@db-design/react';
<Layout variant="left-aligned">
  <Container width="text">Content</Container>
</Layout>;
```

## Nesting

Containers can and should be nested.

```jsx
<Container width="extended">
  <Container width="content">Content</Container>
</Container>
```

```jsx
<Container width="full">
  <Container width="content">Content</Container>
</Container>
```

```jsx
import { Layout } from '@db-design/react';
<Layout variant="left-aligned">
  <Container width="extended">
    <Container width="content">Content</Container>
  </Container>
</Layout>;
```

```jsx
import { Layout } from '@db-design/react';
<Layout variant="left-aligned">
  <Container width="full">
    <Container width="content">Content</Container>
  </Container>
</Layout>;
```

## Align

No align (= left):

```jsx
import { Logo, Pulse, Headline, Body } from '@db-design/react';
<Container width="content">
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse>
    <Headline>Headline</Headline>
  </Pulse>
  <Container width="text" marginTop="l">
    <Body>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Body>
  </Container>
</Container>;
```

Center everything:

```jsx
import { Logo, Pulse, Headline, Body } from '@db-design/react';
<Container width="content" align="center">
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse>
    <Headline>Headline</Headline>
  </Pulse>
  <Container width="text" marginTop="l">
    <Body>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Body>
  </Container>
</Container>;
```

Center on mobile only:

```jsx
import { Logo, Pulse, Headline, Body } from '@db-design/react';
<Container width="content" align={{ mobile: 'center', tablet: 'left' }}>
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse>
    <Headline>Headline</Headline>
  </Pulse>
  <Container width="text" marginTop="l">
    <Body>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Body>
  </Container>
</Container>;
```

Center most things, but reset the text align for the copy:

```jsx
import { Logo, Pulse, Headline, Body } from '@db-design/react';
<Container width="content" align="center">
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse>
    <Headline>Headline</Headline>
  </Pulse>
  <Container width="text" align="left" marginTop="l">
    <Body>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Body>
  </Container>
</Container>;
```

Possible for edge-cases: completely reset the text align for the copy:

```jsx
import { Logo, Pulse, Headline, Body } from '@db-design/react';
<Container width="content" align="center">
  <Logo logoUnitsBottom="1" size="xl" />
  <Pulse>
    <Headline>Headline</Headline>
  </Pulse>
  <Container width="content" align="left" marginTop="l">
    <Container width="text">
      <Body>
        Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna
        hendrerit nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis
        porta ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra
        metus mollis.
      </Body>
    </Container>
  </Container>
</Container>;
```

## Background colours/themes

```jsx
import { Theme, Logo, Pulse, Headline, Body } from '@db-design/react';
<Container filled width="full" align="center">
  <Theme theme="DB_LIGHT_ALTERNATE">
    <Container
      filled
      horizontalPadding="l"
      verticalPadding="m"
      width="content"
      align="center"
    >
      <Logo logoUnitsBottom="1" size="xl" />
      <Pulse>
        <Headline>Headline</Headline>
      </Pulse>
    </Container>
  </Theme>
</Container>;
```

```jsx
import { Theme, Logo, Pulse, Headline, Body } from '@db-design/react';
<Theme theme="DB_LIGHT_ALTERNATE">
  <Container filled verticalPadding="l" width="full" align="center">
    <Theme theme="DB_LIGHT">
      <Container
        filled
        horizontalPadding="l"
        verticalPadding="m"
        width="content"
        align="center"
      >
        <Logo logoUnitsBottom="1" size="xl" />
        <Pulse>
          <Headline>Headline</Headline>
        </Pulse>
      </Container>
    </Theme>
  </Container>
</Theme>;
```
