# Container

```js
import { Container } from '@db-design/react';
```

```jsx noeditor
import { Notification, Button } from '@db-design/react';
const onClick = () => {
  const isolatedLink = document.querySelector('[data-testid="Container-isolate-button"]');
  if (isolatedLink) {
    isolatedLink.click();
  }
};
<Notification
  action={
    <Button size="s" variant="primary" onClick={onClick}>
      Toggle sidebar
    </Button>
  }
>
  This layout documentation might require a screen wider than 1440 px to show the examples. If you
  use a smaller screen, zoom out the page or
</Notification>;
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
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit nisl
      facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta ligula. Nulla
      facilisi. Morbi placerat ex a arcu tristique, non viverra metus mollis.
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
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit nisl
      facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta ligula. Nulla
      facilisi. Morbi placerat ex a arcu tristique, non viverra metus mollis.
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
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit nisl
      facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta ligula. Nulla
      facilisi. Morbi placerat ex a arcu tristique, non viverra metus mollis.
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
        Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna hendrerit nisl
        facilisis. Duise consequat libero vela urnat pellentesque, lobortis porta ligula. Nulla
        facilisi. Morbi placerat ex a arcu tristique, non viverra metus mollis.
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
