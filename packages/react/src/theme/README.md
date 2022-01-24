# Theme

```js
import { Theme } from '@db-design/react';
```

```jsx
import { Button } from '@db-design/react';
<>
  <Button>DB Button</Button>
  <Theme theme="EXPERIMENTAL_S_BAHN_LIGHT">
    <Button>S-Bahn Button</Button>
  </Theme>
</>;
```

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->

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
  Title,
  Copy,
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
              <Title size="xxl">Primary title</Title>
              <Title variant="secondary" light size="m">
                Secondary title
              </Title>
            </Pulse>
          </div>
          <Container align="center">
            <p>
              <Copy size="s">Current theme:</Copy>
              <Copy size="l">{themes[themeIndex]}</Copy>
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
            <Radiobutton name="rb" defaultChecked>Option 2</Radiobutton>
            <Radiobutton disabled checked>Option 3</Radiobutton>
            <Button variant="solid" size="m">
              Solid
            </Button>
            <Link href="#" variant="secondary" iconPosition="before">
              Link
            </Link>
            <Link href="#">Link</Link>
          </div>
          <p style={{ marginTop: `48px` }}>
            <Copy size="m">Travel information:</Copy>
            <Copy variant="secondary" size="s">
              (possible but not recommended on branded background)
            </Copy>
          </p>
          <div
            style={{
              border: 'solid var(--db-border-color)',
              borderWidth: '1px  0',
              padding: '8px 2px',
            }}
          >
            <Copy>
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
            </Copy>
          </div>
          <Copy
            className="statusPreview"
            style={{ lineHeight: '24px', width: '240px', margin: 'auto' }}
          >
            <Status severity="success">This feature is included</Status>
            <Status severity="warning">This feature is not included</Status>
            <Status severity="informative">This feature is optional</Status>
            <Status severity="error">This feature got removed</Status>
            <Status severity="fatal">No information available</Status>
          </Copy>
        </Container>
      </Theme>
    </div>
  );
};

return <ThemesExample />;
```

<style>.statusPreview .db-inline-spacer { margin-top: 4px }</style>

Even though possible, forms and travel information should be avoided in `loud` themes. S-Bahn themes are made for websites using the green S-Bahn logo.

## Nesting themes

Themes can and should be nested. Especially `DB_LIGHT` and `DB_LIGHT_ALTERNATE` are made to structure a page. `DB` (with red background) can highlight a teaser or special section. `DB_DARK` is perfect for a footer section. Find out more [how to apply themes on websites](https://dpp.bahn-x.de/foundation/colours/how-to-use-colours).

Remember to use `<Copy>`/`<Title>` for any text, otherwise the text colours won’t apply.

```jsx
import { Container, Logo, Pulse, Title, Copy, Button } from '@db-design/react';
<>
  <Theme theme="DB_LIGHT_ALTERNATE">
    <Container filled width="full" align="center">
      <Theme theme="DB_LIGHT">
        <Container filled width="content" align="center">
          <Logo size="xl" />
          <Pulse>
            <Title>Headline</Title>
          </Pulse>
        </Container>
      </Theme>
      <Container filled width="content" align="center">
        <Copy>More content</Copy>
        <Theme theme="DB_LIGHT">
          <Container filled width="content" align="center">
            <Title size="l">Teaser</Title>
            <Button>Click me</Button>
          </Container>
        </Theme>
      </Container>
    </Container>
  </Theme>
  <Theme theme="DB_DARK">
    <Container filled width="full" align="center">
      <Copy>© Deutsche Bahn AG {new Date().getFullYear()}</Copy>
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

Do _not_ switch from alternate to non-alternate and vice versa.
