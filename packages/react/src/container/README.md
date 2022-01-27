# Container

```js
import { Container } from '@db-design/react';
```

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
        <td>Content of the Container</td>
      </tr>
    <tr>
        <td><strong>width</strong></td>
        <td><code>ResponsiveType&lt;&quot;text&quot; | &quot;content&quot; | &quot;extended&quot; | &quot;full&quot;&gt;</code></td>
        <td>false</td>
        <td>full</td>
        <td>The width of the Container</td>
      </tr>
    <tr>
        <td><strong>align</strong></td>
        <td><code>ResponsiveType&lt;&quot;left&quot; | &quot;center&quot; | &quot;right&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td>The alignment of the Container</td>
      </tr>
    <tr>
        <td><strong>filled</strong></td>
        <td><code>ResponsiveType&lt;boolean&gt;</code></td>
        <td>false</td>
        <td>false</td>
        <td>Adds a primary background color for the Container</td>
      </tr>
    <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td>Additional class names you want to add to the Container</td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

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
import { Logo, Pulse, Title, Copy } from '@db-design/react';
<Container width="content">
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width="text">
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Copy>
  </Container>
</Container>;
```

Center everything:

```jsx
import { Logo, Pulse, Title, Copy } from '@db-design/react';
<Container width="content" align="center">
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width="text">
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Copy>
  </Container>
</Container>;
```

Center on mobile only:

```jsx
import { Logo, Pulse, Title, Copy } from '@db-design/react';
<Container width="content" align={{ mobile: 'center', tablet: 'left' }}>
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width="text">
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Copy>
  </Container>
</Container>;
```

Center most things, but reset the text align for the copy:

```jsx
import { Logo, Pulse, Title, Copy } from '@db-design/react';
<Container width="content" align="center">
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width="text" align="left">
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit
      nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta
      ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra metus
      mollis.
    </Copy>
  </Container>
</Container>;
```

Possible for edge-cases: completely reset the text align for the copy:

```jsx
import { Logo, Pulse, Title, Copy } from '@db-design/react';
<Container width="content" align="center">
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width="content" align="left">
    <Container width="text">
      <Copy>
        Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna
        hendrerit nisl facilisis. Duise consequat libero vela urnat pellentesque, lobortis
        porta ligula. Nulla facilisi. Morbi placerat ex a arcu tristique, non viverra
        metus mollis.
      </Copy>
    </Container>
  </Container>
</Container>;
```

## Background colours/themes

```jsx
import { Theme, Logo, Pulse, Title, Copy } from '@db-design/react';
<Container filled width="full" align="center">
  <Theme theme="DB_ALTERNATE">
    <Container filled width="content" align="center">
      <Logo />
      <Pulse>
        <Title>Headline</Title>
      </Pulse>
    </Container>
  </Theme>
</Container>;
```

```jsx
import { Theme, Logo, Pulse, Title, Copy } from '@db-design/react';
<Theme theme="DB_ALTERNATE">
  <Container filled width="full" align="center">
    <Theme theme="DB">
      <Container filled width="content" align="center">
        <Logo />
        <Pulse>
          <Title>Headline</Title>
        </Pulse>
      </Container>
    </Theme>
  </Container>
</Theme>;
```
