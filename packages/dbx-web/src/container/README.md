# Container

```js
import { Container } from '@bahn-x/dbx-web';
```

_Info:_ This layout documentation might require a screen wider than 1440 px to show the examples. If you use a smaller screen, zoom out the page.

<style>
  main {
    margin-left: 48px !important;
    max-width: unset !important;
    padding: 0 16px !important;
  }

  main [class^='rsg--preview-'] {
    border-radius: 0 !important;
    padding: 16px 0 !important;
  }
</style>

## Centered layout

```jsx
<Container width={Container.widths.FULL}>Content</Container>
```

```jsx
<Container width={Container.widths.EXTENDED}>Content</Container>
```

```jsx
<Container width={Container.widths.CONTENT}>Content</Container>
```

```jsx
<Container width={Container.widths.TEXT}>Text</Container>
```

## Left-aligned layout

```jsx
import { Layout } from '@bahn-x/dbx-web';
<Layout variant={Layout.variants.LEFT_ALIGNED}>
  <Container width={Container.widths.CONTENT}>Content</Container>
</Layout>;
```

```jsx
import { Layout } from '@bahn-x/dbx-web';
<Layout variant={Layout.variants.LEFT_ALIGNED}>
  <Container width={Container.widths.EXTENDED}>Content</Container>
</Layout>;
```

```jsx
import { Layout } from '@bahn-x/dbx-web';
<Layout variant={Layout.variants.LEFT_ALIGNED}>
  <Container width={Container.widths.FULL}>Content</Container>
</Layout>;
```

```jsx
import { Layout } from '@bahn-x/dbx-web';
<Layout variant={Layout.variants.LEFT_ALIGNED}>
  <Container width={Container.widths.TEXT}>Content</Container>
</Layout>;
```

## Nesting

Containers can and should be nested.

```jsx
<Container width={Container.widths.EXTENDED}>
  <Container width={Container.widths.CONTENT}>Content</Container>
</Container>
```

```jsx
<Container width={Container.widths.FULL}>
  <Container width={Container.widths.CONTENT}>Content</Container>
</Container>
```

```jsx
import { Layout } from '@bahn-x/dbx-web';
<Layout variant={Layout.variants.LEFT_ALIGNED}>
  <Container width={Container.widths.EXTENDED}>
    <Container width={Container.widths.CONTENT}>Content</Container>
  </Container>
</Layout>;
```

```jsx
import { Layout } from '@bahn-x/dbx-web';
<Layout variant={Layout.variants.LEFT_ALIGNED}>
  <Container width={Container.widths.FULL}>
    <Container width={Container.widths.CONTENT}>Content</Container>
  </Container>
</Layout>;
```

## Align

No align (= left):

```jsx
import { Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<Container width={Container.widths.CONTENT}>
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width={Container.widths.TEXT}>
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna
      hendrerit nisl facilisis. Duise consequat libero vela urnat pellentesque,
      lobortis porta ligula. Nulla facilisi. Morbi placerat ex a arcu tristique,
      non viverra metus mollis.
    </Copy>
  </Container>
</Container>;
```

Center everything:

```jsx
import { Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<Container width={Container.widths.CONTENT} align={Container.alignments.CENTER}>
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width={Container.widths.TEXT}>
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna
      hendrerit nisl facilisis. Duise consequat libero vela urnat pellentesque,
      lobortis porta ligula. Nulla facilisi. Morbi placerat ex a arcu tristique,
      non viverra metus mollis.
    </Copy>
  </Container>
</Container>;
```

Center most things, but reset the text align for the copy:

```jsx
import { Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<Container width={Container.widths.CONTENT} align={Container.alignments.CENTER}>
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width={Container.widths.TEXT} align={Container.alignments.LEFT}>
    <Copy>
      Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac urna
      hendrerit nisl facilisis. Duise consequat libero vela urnat pellentesque,
      lobortis porta ligula. Nulla facilisi. Morbi placerat ex a arcu tristique,
      non viverra metus mollis.
    </Copy>
  </Container>
</Container>;
```

Possible for edge-cases: completely reset the text align for the copy:

```jsx
import { Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<Container width={Container.widths.CONTENT} align={Container.alignments.CENTER}>
  <Logo />
  <Pulse>
    <Title>Headline</Title>
  </Pulse>
  <Container width={Container.widths.CONTENT} align={Container.alignments.LEFT}>
    <Container width={Container.widths.TEXT}>
      <Copy>
        Lorem ipsum dolor sit amet, consecteture elit adipiscing. Integer ac
        urna hendrerit nisl facilisis. Duise consequat libero vela urnat
        pellentesque, lobortis porta ligula. Nulla facilisi. Morbi placerat ex a
        arcu tristique, non viverra metus mollis.
      </Copy>
    </Container>
  </Container>
</Container>;
```

## Variants (background colours)

```jsx
import { Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<Container
  variant={Container.variants.PRIMARY}
  width={Container.widths.FULL}
  align={Container.alignments.CENTER}
>
  <Container
    variant={Container.variants.SECONDARY}
    width={Container.widths.CONTENT}
    align={Container.alignments.CENTER}
  >
    <Logo />
    <Pulse>
      <Title>Headline</Title>
    </Pulse>
  </Container>
</Container>;
```

```jsx
import { Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<Container
  variant={Container.variants.SECONDARY}
  width={Container.widths.FULL}
  align={Container.alignments.CENTER}
>
  <Container
    variant={Container.variants.PRIMARY}
    width={Container.widths.CONTENT}
    align={Container.alignments.CENTER}
  >
    <Logo />
    <Pulse>
      <Title>Headline</Title>
    </Pulse>
  </Container>
</Container>;
```
