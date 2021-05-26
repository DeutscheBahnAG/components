# Theme

```js
import { Theme } from '@bahn-x/dbx-web';
```

```jsx
import { Button } from '@bahn-x/dbx-web';
<>
  <Button>DB Button</Button>
  <Theme theme={Theme.themes.S_BAHN}>
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
} from '@bahn-x/dbx-web';
import Icons from '@bahn-x/dbx-icons';
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
        padding: `${spacing.l}px`,
        margin: `-${spacing.m}px`,
        width: `calc(100% + ${2 * spacing.m}px)`,
        borderRadius: '4.3px',
      }}
    >
      <Logo size={Logo.sizes.XXL} />
      <Pulse>
        <Title size={Title.sizes.XXL}>Preview theme</Title>
        <Title variant="secondary" light size={Title.sizes.M}>
          {themeNames[themeIndex]}
        </Title>
      </Pulse>
      <br />
      <br />
      <div>
        <Button
          onClick={() => {
            setThemeIndex(
              themeIndex === 0 ? themes.length - 1 : themeIndex - 1
            );
          }}
          variant="secondary"
          icon={<Icons.NavigationArrowBack />}
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
        >
          Use next theme
        </Button>
      </div>
      <br />
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
      <br />
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
      <br />
      <div
        style={{
          border: 'solid var(--dbx-border-color)',
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

Themes can and should be nested. Especially `DB` and `DB_ALTERNATE` are made to structure a page. `DB_LOUD` can highlight a teaser or special section. `DB_CONTRAST` is perfect for a footer section. Find out more [how to apply themes on websites](https://dpp.bahn-x.de/foundation/colours/how-to-use-colours).

Remember to use `<Copy>`/`<Title>` for any text, otherwise the text colours won’t apply.

```jsx
import { Container, Logo, Pulse, Title, Copy } from '@bahn-x/dbx-web';
<>
  <Theme theme={Theme.themes.DB_ALTERNATE}>
    <Container
      filled
      width={Container.widths.FULL}
      align={Container.alignments.CENTER}
    >
      <Theme theme={Theme.themes.DB}>
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
  <Theme theme={Theme.themes.DB_CONTRAST}>
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

- `DB` ↔︎ `CONTRAST`
- `DB_ALTERNATE` ↔︎ `CONTRAST_ALTERNATE`

Do _not_ switch from alternate to non-alternate and vice versa.
