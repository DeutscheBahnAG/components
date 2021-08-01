# Theme

```js
import { Theme } from '@db-design/react';
```

```jsx
import { Button } from '@db-design/react';
<>
  <Button>DB Button</Button>
  <Theme theme={Theme.themes.S_BAHN_LIGHT}>
    <Button>S-Bahn Button</Button>
  </Theme>
</>;
```

## Themes in action

```jsx noeditor
import {
  Container,
  Button,
  Textfield,
  Checkbox,
  Transportchip,
  Track,
  Logo,
  Pulse,
  Title,
  Copy,
  Triptimespan,
} from '@db-design/react';
import Icons from '@db-design/react-icons';
import { radius, spacing } from '@bahn-x/dbx-tokens/src/deutsche-bahn';
import { useState } from 'react';
const [themeIndex, setThemeIndex] = useState(0);
const themes = Object.values(Theme.themes);
const themeNames = Object.keys(Theme.themes);
<div className="rsg--preview-37" style={{ borderRadius: radius.l }}>
  <Theme theme={themes[themeIndex]}>
    <Container
      filled
      align={Container.alignments.CENTER}
      style={{
        display: 'grid',
        gap: `${spacing.m}px`,
        padding: `${spacing.l}px`,
        width: `calc(100% + ${2 * spacing.m}px)`,
        borderRadius: '4.3px',
      }}
    >
      <div>
        <Logo size={Logo.sizes.XXL} />
        <Pulse>
          <Title size={Title.sizes.XXL}>Primary title</Title>
          <Title variant={Title.variants.SECONDARY} light size={Title.sizes.M}>
            Secondary title
          </Title>
        </Pulse>
      </div>
      <p>
        <Copy size={Copy.sizes.S}>Current theme:</Copy>
        <Copy size={Copy.sizes.L}>{themeNames[themeIndex]}</Copy>
      </p>
      <div>
        <Button
          onClick={() => {
            setThemeIndex(
              themeIndex === 0 ? themes.length - 1 : themeIndex - 1
            );
          }}
          variant={Button.variants.SECONDARY}
          icon={<Icons.NavigationArrowBack />}
          style={{ width: '212px' }}
        >
          Use previous theme
        </Button>
        <Button
          onClick={() => {
            setThemeIndex(
              themeIndex === themes.length - 1 ? 0 : themeIndex + 1
            );
          }}
          icon={<Icons.NavigationArrowForward />}
          style={{ width: '212px' }}
        >
          Use next theme
        </Button>
      </div>
      <div>
        <Textfield
          inlineLabel="Textfield"
          value="Input"
          prefix={<Icons.JourneyStart />}
        />
        <Textfield
          disabled
          inlineLabel="Textfield"
          value="Disabled"
          prefix={<Icons.JourneyStart />}
        />
      </div>
      <div>
        <Checkbox checked>Checkbox</Checkbox>
        <Checkbox checked disabled>
          Disabled
        </Checkbox>
        <Button variant="solid" size="m">
          Solid
        </Button>
        <a href="#">Link</a>
      </div>
      <p style={{ marginTop: `${spacing.xl}px` }}>
        <Copy size={Copy.sizes.M}>Travel information:</Copy>
        <Copy variant={Copy.variants.SECONDARY} size={Copy.sizes.S}>
          (possible but not recommended on coloured background)
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
          <Triptimespan
            departureDateTime="09:54"
            predictedDepartureDateTime="09:57"
            arrivalDateTime="12:48"
            predictedArivalDateTime="13:07"
          />
          {'   '}
          <Transportchip name="ICE 123" />
          {'   '}
          <Transportchip name="IC 456" />
          {'   '}
          <Transportchip name="S1" zipCode="10111" showProductLogo />
          {'   '}
          <Transportchip name="U12" zipCode="10111" showProductLogo />
          {'   '}
          <Transportchip
            name="M10"
            zipCode="10111"
            showProductLogo
            product="tram"
          />
          {'   '}
          <Track track="2a" />
        </Copy>
      </div>
    </Container>
  </Theme>
</div>;
```

Even though possible, forms and travel information should be avoided in `loud` themes. S-Bahn themes are made for websites using the green S-Bahn logo.

## Nesting themes

Themes can and should be nested. Especially `DB_LIGHT` and `DB_LIGHT_ALTERNATE` are made to structure a page. `DB` (with red background) can highlight a teaser or special section. `DB_DARK` is perfect for a footer section. Find out more [how to apply themes on websites](https://dpp.bahn-x.de/foundation/colours/how-to-use-colours).

Remember to use `<Copy>`/`<Title>` for any text, otherwise the text colours won’t apply.

```jsx
import { Container, Logo, Pulse, Title, Copy } from '@db-design/react';
<>
  <Theme theme={Theme.themes.DB_LIGHT_ALTERNATE}>
    <Container
      filled
      width={Container.widths.FULL}
      align={Container.alignments.CENTER}
    >
      <Theme theme={Theme.themes.DB_LIGHT}>
        <Container
          filled
          width={Container.widths.CONTENT}
          align={Container.alignments.CENTER}
        >
          <Logo />
          <Pulse>
            <Title>Headline</Title>
          </Pulse>
        </Container>
      </Theme>
      <Container
        filled
        width={Container.widths.CONTENT}
        align={Container.alignments.CENTER}
      >
        <Copy>More content</Copy>
      </Container>
    </Container>
  </Theme>
  <Theme theme={Theme.themes.DB_DARK}>
    <Container
      filled
      width={Container.widths.FULL}
      align={Container.alignments.CENTER}
    >
      <Copy>Footer section</Copy>
    </Container>
  </Theme>
</>;
```

## A note on ‘dark mode’

If you want to implement a ‘dark mode’ of your website, use this switch:

- `DB_LIGHT` ↔︎ `DB_DARK`
- `DB_LIGHT_ALTERNATE` ↔︎ `DB_DARK_ALTERNATE`

Do _not_ switch from alternate to non-alternate and vice versa.
