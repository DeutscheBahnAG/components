# Radiobutton

```js
import { Radiobutton } from '@db-design/react';
```

```jsx
<Radiobutton>Radiobutton</Radiobutton>
```

## States

**Unchecked**
```jsx
<Radiobutton>Radiobutton unchecked</Radiobutton>
```

**Checked**
```jsx
<Radiobutton checked>Radiobutton checked</Radiobutton>
```

**Disabled / unchecked**
```jsx
<Radiobutton disabled>Radiobutton disabled / unchecked</Radiobutton>
```

**Disabled / checked**
```jsx
<Radiobutton disabled checked>Radiobutton disabled / checked</Radiobutton>
```

## Using Radiobutton as form input 
```jsx
import { Button } from '@db-design/react';

const onSubmit = (event) => {
  event.preventDefault();
  window.alert(`selected color: ${new FormData(event.target).get('color')}`);
};

<form onSubmit={onSubmit}>
  <Radiobutton name="color" value="red">Red</Radiobutton>
  <Radiobutton name="color" value="green">Green</Radiobutton>
  <Radiobutton name="color" value="blue">Blue</Radiobutton>
  <Button type="submit" size="s">Submit</Button>
</form>
```

## Vertical layout example
```jsx
<form style={{ display: 'grid' }}>
  <Radiobutton name="color">Red</Radiobutton>
  <Radiobutton name="color">Green</Radiobutton>
  <Radiobutton name="color">Blue</Radiobutton>
</form>
```

## Appearance within Themes

```jsx noeditor
import { Theme, Container, Title } from '@db-design/react';
<>
  {[
    'DB_LIGHT',
    'DB_LIGHT_ALTERNATE',
    'DB_DARK',
    'DB_DARK_ALTERNATE',
    'DB_BRANDED',
    'DISPLAY'
  ].map(theme => (
    <Theme key={theme} theme={theme}>
      <Container 
        filled 
        width="full" 
        style={{ flexDirection: 'row', padding: '10px', margin: '10px 0' }}
      >
        <div style={{ flexGrow: '1', marginRight: '1em' }}>
          <Title size="s">{theme}</Title>
        </div>
        <Radiobutton checked>On</Radiobutton>
        <Radiobutton checked={false}>Off</Radiobutton>
        <Radiobutton disabled checked>On</Radiobutton>
        <Radiobutton disabled checked={false}>Off</Radiobutton>
      </Container>
    </Theme>
  ))}
</>
```

## Footer

The content passed to the `footer` prop will be rendered below the input label. 
Use it to provide help text, links, error messages or other context.

⚠ Please **do not** add links inside the input label (the `children` prop). Doing so will causes accessibility issues.

See the docs of the `Checkbox` component for details.

```jsx
import { Copy } from '@db-design/react';

<form style={{ display: 'grid' }}>
  <label><Copy bold>Select your plan:</Copy></label>

  <Radiobutton name="plan" value="starter"
    footer={<a href="#starter-details">See details</a>}
  >
    Starter
  </Radiobutton>

  <Radiobutton name="plan" value="premium"
    footer={
      <>
        <a href="#premium-details">See details</a>{' '}
        <a href="#premium-terms">Additional premium terms</a>
      </>
    }
  >
    Premium
  </Radiobutton>
</form>
```

