# Theme

This component switches the theme of its child components. A typical theme switch happens between white (`DB_LIGHT`) and light gray (`DB_LIGHT_ALTERNATE`) backgrounds – while the `<Theme>` component takes care of contrast (accessiblity) even when the difference might not be obvious on the first look.

```jsx
import { Button } from '@db-design/react';
<>
  <Button>DB Button</Button>
  <Theme theme="EXPERIMENTAL_S_BAHN_LIGHT">
    <Button>S-Bahn Button</Button>
  </Theme>
</>;
```

[Overview of all components in all available themes](https://dpp.bahn-x.de/examples/themes)

## Imports

```js
import { Theme } from '@db-design/react';
```

```scss
@import '@db-design/styles/global';
@import '@db-design/styles/themes/display'; // optional (Station&Service)
@import '@db-design/styles/themes/db-green'; // optional (Das ist grün.)
@import '@db-design/styles/themes/db-pride'; // optional (Pride month)
@import '@db-design/styles/themes/s-bahn'; // optional (S-Bahn)
```

By default (global import) the light and dark as well as branded (red) DB themes get imported. Special themes must be imported addionally.

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
        <td><p>Content to be themed</p></td>
      </tr>
      <tr>
        <td><strong>theme</strong></td>
        <td><code>&quot;DB_BRANDED&quot; | &quot;DB_LIGHT&quot; | &quot;DB_LIGHT_ALTERNATE&quot; | &quot;DB_DARK&quot; | &quot;DB_DARK_ALTERNATE&quot; | &quot;DISPLAY&quot; | &quot;EXPERIMENTAL_S_BAHN_BRANDED&quot; | &quot;EXPERIMENTAL_S_BAHN_LIGHT&quot; | &quot;EXPERIMENTAL_S_BAHN_LIGHT_ALTERNATE&quot; | ... 6 more ... | &quot;EXPERIMENTAL_DB_PRIDE_LIGHT_ALTERNATE&quot;</code></td>
        <td>false</td>
        <td></td>
        <td><p>The active theme applied to the children</p></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names you want to add to the Theme</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Themes in action

```jsx noeditor
import {
  Container,
  Button,
  Link,
  Textfield,
  Checkbox,
  Radiobutton,
  Transportchip,
  Track,
  Logo,
  Pulse,
  Headline,
  Body,
  Triptimespan,
  Status,
} from '@db-design/react';
import {
  NavigationArrowBack,
  NavigationArrowForward,
  JourneyStart,
} from '@db-design/react-icons';
import { useState } from 'react';
import { themes } from './theme';
const ThemesExample = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  return (
    <div className="rsg--preview-37" style={{ borderRadius: 4, margin: -16 }}>
      <Theme theme={themes[themeIndex]}>
        <Container
          filled
          align="center"
          style={{
            display: 'grid',
            gap: `16px`,
            padding: `32px`,
            width: `calc(100% + 32px)`,
            borderRadius: '4px',
          }}
        >
          <div>
            <Logo size="xxl" />
            <Pulse>
              <Headline size="xl">Primary title</Headline>
              <Headline variant="secondary" light size="m">
                Secondary title
              </Headline>
            </Pulse>
          </div>
          <Container align="center">
            <p>
              <Body size="s">Current theme:</Body>
              <Body size="l">{themes[themeIndex]}</Body>
            </p>
          </Container>
          <div>
            <Button
              onClick={() => {
                setThemeIndex(themeIndex === 0 ? themes.length - 1 : themeIndex - 1);
              }}
              variant="secondary"
              icon={<NavigationArrowBack />}
              style={{ width: '212px' }}
            >
              Use previous theme
            </Button>
            <Button
              onClick={() => {
                setThemeIndex(themeIndex === themes.length - 1 ? 0 : themeIndex + 1);
              }}
              icon={<NavigationArrowForward />}
              style={{ width: '212px' }}
              iconPosition="after"
            >
              Use next theme
            </Button>
          </div>
          <div>
            <Textfield inlineLabel="Textfield" value="Input" prefix={<JourneyStart />} />
            <Textfield
              disabled
              inlineLabel="Textfield"
              value="Disabled"
              prefix={<JourneyStart />}
            />
          </div>
          <div>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox checked>Checked</Checkbox>
            <Checkbox checked disabled>
              Disabled
            </Checkbox>
            <Radiobutton name="rb">Option 1</Radiobutton>
            <Radiobutton name="rb" defaultChecked>
              Option 2
            </Radiobutton>
            <Radiobutton disabled checked>
              Option 3
            </Radiobutton>
            <Button variant="solid" size="m">
              Solid
            </Button>
            <Link href="#" variant="secondary" iconPosition="before">
              Link
            </Link>
            <Link href="#">Link</Link>
          </div>
          <p style={{ marginTop: `48px` }}>
            <Body size="m">Travel information:</Body>
            <Body variant="secondary" size="s">
              (possible but not recommended on branded background)
            </Body>
          </p>
          <div
            style={{
              border: 'solid var(--db-border-color)',
              borderWidth: '1px  0',
              padding: '8px 2px',
            }}
          >
            <Body>
              <span
                style={{
                  width: '600px',
                  display: 'inline-block',
                  textAlign: 'left',
                }}
              >
                <Triptimespan
                  departureDateTime="09:54"
                  predictedDepartureDateTime="09:57"
                  arrivalDateTime="12:48"
                  predictedArrivalDateTime="13:07"
                />
                {'      '}
                <Transportchip name="ICE 123" />
                <Transportchip name="IC 456" />
                <Transportchip name="S1" zipCode="10111" showProductLogo />
                <Transportchip name="U12" zipCode="10111" showProductLogo />
                <Transportchip
                  name="M10"
                  zipCode="10111"
                  showProductLogo
                  product="tram"
                />
              </span>
              <Track track="2a" />
            </Body>
          </div>
          <Body
            className="statusPreview"
            style={{ lineHeight: '24px', width: '240px', margin: 'auto' }}
          >
            <Status severity="success">This feature is included</Status>
            <Status severity="warning">This feature is not included</Status>
            <Status severity="informative">This feature is optional</Status>
            <Status severity="error">This feature got removed</Status>
            <Status severity="fatal">No information available</Status>
          </Body>
        </Container>
      </Theme>
    </div>
  );
};

return <ThemesExample />;
```

<style>.statusPreview .db-inline-spacer { margin-top: 4px }</style>

Even though possible, forms and travel information should be avoided in `loud` themes. S-Bahn themes are made for websites using the green S-Bahn logo. There’s also an [overview of all components in all available themes](https://dpp.bahn-x.de/examples/themes).

## Nesting themes

Themes can and should be nested. Especially `DB_LIGHT` and `DB_LIGHT_ALTERNATE` are made to structure a page. `DB` (with red background) can highlight a teaser or special section. `DB_DARK` is perfect for a footer section. Find out more [how to apply themes on websites](https://dpp.bahn-x.de/foundation/colours/how-to-use-colours).

Remember to use `<Body>`/`<Headline>` for any text, otherwise the text colours won’t apply.

```jsx
import { Container, Logo, Pulse, Headline, Body, Button } from '@db-design/react';
<>
  <Theme theme="DB_LIGHT_ALTERNATE">
    <Container
      filled
      width="full"
      align="center"
      horizontalPadding="m"
      verticalPadding="m"
    >
      <Theme theme="DB_LIGHT">
        <Container filled width="content" align="center" verticalPadding="l">
          <Logo size="xl" logoUnitsBottom="1" />
          <Pulse>
            <Headline>Headline</Headline>
          </Pulse>
        </Container>
      </Theme>
      <Container filled width="content" align="center" verticalPadding="m">
        <Body>More content</Body>
        <Theme theme="DB_LIGHT">
          <Container
            filled
            width="content"
            align="center"
            verticalPadding="m"
            marginTop="l"
          >
            <Container filled align="center" marginBottom="m">
              <Headline size="l">Teaser</Headline>
            </Container>
            <Button>Click me</Button>
          </Container>
        </Theme>
      </Container>
    </Container>
  </Theme>
  <Theme theme="DB_DARK">
    <Container filled width="full" align="center" verticalPadding="m">
      <Container filled align="center" marginBottom="m">
        <Body>© Deutsche Bahn AG {new Date().getFullYear()}</Body>
      </Container>
      <Logo size="m" variant="white" />
    </Container>
  </Theme>
</>;
```

<style>
  .nesting-themes > div {
    border-radius: 4.3px;
    overflow: hidden;
  }

  .nesting-themes > div > div > .db-container {
    padding: 16px;
  }

  .nesting-themes .db-theme--db .db-container {
    margin-top: 32px;
  }

  .nesting-themes .db-button {
    margin-top: 8px;
  }

  .nesting-themes .DB_DARK .db-logo {
    margin-top: 8px;
  }
</style>

## A note on ‘dark mode’

If you want to implement a ‘dark mode’ of your website, use this switch:

- `DB_LIGHT` ↔︎ `DB_DARK`
- `DB_LIGHT_ALTERNATE` ↔︎ `DB_DARK_ALTERNATE`

[More about this topic](https://dpp.bahn-x.de/foundation/colours/dark-mode)
