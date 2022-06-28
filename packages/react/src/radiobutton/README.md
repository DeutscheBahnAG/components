# Radiobutton

```jsx
<Radiobutton>Radiobutton</Radiobutton>
```

## Imports

```js
import { Radiobutton } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/components/radiobutton';
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
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names you want to add to the radio button</p></td>
      </tr>
      <tr>
        <td><strong>children</strong></td>
        <td><code>ReactNode</code></td>
        <td>true</td>
        <td></td>
        <td><p>Content rendered as the Checkbox label, can be text or any element except links and buttons</p></td>
      </tr>
      <tr>
        <td><strong>footer</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional content below the label, e.g. links that must not be part of the label</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

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
<Radiobutton disabled checked>
  Radiobutton disabled / checked
</Radiobutton>
```

## Using Radiobutton as form input

```jsx
import { Button } from '@db-design/react';

const onSubmit = (event) => {
  event.preventDefault();
  window.alert(`selected color: ${new FormData(event.target).get('color')}`);
};

<form onSubmit={onSubmit}>
  <Radiobutton name="color" value="red">
    Red
  </Radiobutton>
  <Radiobutton name="color" value="green">
    Green
  </Radiobutton>
  <Radiobutton name="color" value="blue">
    Blue
  </Radiobutton>
  <Button type="submit" size="s">
    Submit
  </Button>
</form>;
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
import { Theme, Container, Headline } from '@db-design/react';
<>
  {[
    'DB_LIGHT',
    'DB_LIGHT_ALTERNATE',
    'DB_DARK',
    'DB_DARK_ALTERNATE',
    'DB_BRANDED',
    'DISPLAY',
  ].map((theme) => (
    <Theme key={theme} theme={theme}>
      <Container
        filled
        width="full"
        style={{ flexDirection: 'row', padding: '10px', margin: '10px 0' }}
      >
        <div style={{ flexGrow: '1', marginRight: '1em' }}>
          <Headline size="s">{theme}</Headline>
        </div>
        <Radiobutton checked>On</Radiobutton>
        <Radiobutton checked={false}>Off</Radiobutton>
        <Radiobutton disabled checked>
          On
        </Radiobutton>
        <Radiobutton disabled checked={false}>
          Off
        </Radiobutton>
      </Container>
    </Theme>
  ))}
</>;
```

## Footer

The content passed to the `footer` prop will be rendered below the input label.
Use it to provide help text, links, error messages or other context.

⚠ Please **do not** add links inside the input label (the `children` prop). Doing so will causes accessibility issues.

See the docs of the `Checkbox` component for details.

```jsx
import { Body } from '@db-design/react';

<form style={{ display: 'grid' }}>
  <label>
    <Body bold>Select your plan:</Body>
  </label>

  <Radiobutton
    name="plan"
    value="starter"
    footer={<a href="#starter-details">See details</a>}
  >
    Starter
  </Radiobutton>

  <Radiobutton
    name="plan"
    value="premium"
    footer={
      <>
        <a href="#premium-details">See details</a>{' '}
        <a href="#premium-terms">Additional premium terms</a>
      </>
    }
  >
    Premium
  </Radiobutton>
</form>;
```
