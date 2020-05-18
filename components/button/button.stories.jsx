import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
import Button from './button';
import buttonReadme from './README.md';

class ToggleButtonLoadingStateExample extends React.Component {
  state = { isLoading: false };

  toggleLoading = () =>
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <label htmlFor="toggleLoading" style={{ marginRight: '16px' }}>
          <input
            style={{ marginRight: '8px' }}
            id="toggleLoading"
            type="checkbox"
            onChange={this.toggleLoading}
            checked={isLoading}
          />
          Button is Loading
        </label>

        <Button loading={isLoading} onClick={action('clicked')}>
          I am not loading right now
        </Button>
      </>
    );
  }
}

const DummyIcon = () => (
  <svg width="24" height="24" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M10 0C4.478 0 0 4.477 0 10s4.478 10 10 10 10-4.477 10-10S15.522 0 10 0m0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8" />
      <path d="M8.5 14a.997.997 0 01-.707-.293l-2.5-2.5a.999.999 0 111.414-1.414L8.5 11.586l4.793-4.793a.999.999 0 111.414 1.414l-5.5 5.5A.997.997 0 018.5 14" />
    </g>
  </svg>
);

const DummyI18n = ({ i18nKey }) => (i18nKey === 'jsx' ? 'JSX' : '<Translation Missing>');

storiesOf('Components / Button', module)
  .addDecorator(withReadme(buttonReadme))
  .add('Primary', () => <Button onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary', () => (
    <Button variant={Button.variants.SECONDARY} onClick={action('clicked')}>
      Secondary Button
    </Button>
  ))
  .add('Solid', () =>
    ['white', 'coolgray050', 'coolgray100', 'blue100'].map(color => (
      <div
        key={color}
        style={{
          alignItems: 'center',
          display: 'flex',
          background: tokens.palette[color],
          justifyContent: 'space-between',
          padding: tokens.spacing.m,
        }}
      >
        <Button variant={Button.variants.SOLID} onClick={action('clicked')}>
          Solid Button
        </Button>
        {` on ${color}`}
      </div>
    ))
  )
  .add('Primary with icon', () => (
    <Button icon={<DummyIcon />} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary with icon', () => (
    <Button icon={<DummyIcon />} variant={Button.variants.SECONDARY} onClick={action('clicked')}>
      Secondary Button
    </Button>
  ))
  .add('Solid with icon', () => (
    <Button icon={<DummyIcon />} variant={Button.variants.SOLID} onClick={action('clicked')}>
      Solid Button
    </Button>
  ))
  .add('Primary Square', () => (
    <Button shape={Button.shapes.SQUARE} icon={<DummyIcon />} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary Square', () => (
    <Button
      shape={Button.shapes.SQUARE}
      icon={<DummyIcon />}
      variant={Button.variants.SECONDARY}
      onClick={action('clicked')}
    >
      Secondary Button
    </Button>
  ))
  .add('Solid Square', () => (
    <Button
      shape={Button.shapes.SQUARE}
      icon={<DummyIcon />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      Solid Button
    </Button>
  ))
  .add('Solid Square with JSX tooltip', () => (
    <Button
      shape={Button.shapes.SQUARE}
      icon={<DummyIcon />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      <DummyI18n i18nKey="jsx" /> is allowed
    </Button>
  ))
  .add('Primary Round', () => (
    <Button shape={Button.shapes.ROUND} icon={<DummyIcon />} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary Round', () => (
    <Button
      shape={Button.shapes.ROUND}
      icon={<DummyIcon />}
      variant={Button.variants.SECONDARY}
      onClick={action('clicked')}
    >
      Secondary Button
    </Button>
  ))
  .add('Solid Round', () => (
    <Button
      shape={Button.shapes.ROUND}
      icon={<DummyIcon />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      Solid Button
    </Button>
  ))
  .add('Solid hover only', () => (
    <Button
      shape={Button.shapes.ROUND}
      icon={<DummyIcon />}
      variant={Button.variants.HOVER_ONLY}
      onClick={action('clicked')}
    >
      Solid Button (hover only)
    </Button>
  ))
  .add('Width', () => (
    <>
      <Button onClick={action('clicked')}>Short label</Button>
      <br />
      <br />
      <Button onClick={action('clicked')}>A very long label that extends the width</Button>
    </>
  ))
  .add('Primary full width', () => (
    <Button fullWidth onClick={action('clicked')}>
      Primary Full Width Button
    </Button>
  ))
  .add('Secondary full width', () => (
    <Button variant={Button.variants.SECONDARY} fullWidth onClick={action('clicked')}>
      Secondary Full Width Button
    </Button>
  ))
  .add('Primary Size S', () => (
    <Button onClick={action('clicked')} size={Button.sizes.S}>
      Primary S Button
    </Button>
  ))
  .add('Secondary Size S', () => (
    <Button variant={Button.variants.SECONDARY} onClick={action('clicked')} size={Button.sizes.S}>
      Secondary S Button
    </Button>
  ))
  .add('Primary Size M', () => (
    <Button onClick={action('clicked')} size={Button.sizes.M}>
      Primary M Button
    </Button>
  ))
  .add('Secondary Size M', () => (
    <Button variant={Button.variants.SECONDARY} onClick={action('clicked')} size={Button.sizes.M}>
      Secondary M Button
    </Button>
  ))
  .add('Primary Size L', () => (
    <Button onClick={action('clicked')} size={Button.sizes.L}>
      Primary L Button
    </Button>
  ))
  .add('Secondary Size L', () => (
    <Button variant={Button.variants.SECONDARY} onClick={action('clicked')} size={Button.sizes.L}>
      Secondary L Button
    </Button>
  ))
  .add('Primary Size XL', () => (
    <Button onClick={action('clicked')} size={Button.sizes.XL}>
      Primary XL Button
    </Button>
  ))
  .add('Secondary Size XL', () => (
    <Button variant={Button.variants.SECONDARY} onClick={action('clicked')} size={Button.sizes.XL}>
      Secondary XL Button
    </Button>
  ))
  .add('Primary submit', () => (
    <Button type={Button.types.SUBMIT} onClick={action('clicked')}>
      Primary Submit Button
    </Button>
  ))
  .add('Primary disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Disabled Primary Button
    </Button>
  ))
  .add('Secondary disabled', () => (
    <Button disabled variant={Button.variants.SECONDARY} onClick={action('clicked')}>
      Disabled Secondary Button
    </Button>
  ))
  .add('Solid disabled', () => (
    <Button disabled variant={Button.variants.SOLID} onClick={action('clicked')}>
      Disabled Solid Button
    </Button>
  ))
  .add('Primary Loading Size S', () => (
    <Button size={Button.sizes.S} loading onClick={action('clicked')} />
  ))
  .add('Primary Loading Size M', () => (
    <Button size={Button.sizes.M} loading onClick={action('clicked')} />
  ))
  .add('Primary Loading Size L', () => (
    <Button size={Button.sizes.L} loading onClick={action('clicked')} />
  ))
  .add('Primary Loading Size XL', () => (
    <Button size={Button.sizes.XL} loading onClick={action('clicked')} />
  ))
  .add('Primary Loading full width', () => <Button fullWidth loading onClick={action('clicked')} />)
  .add('Secondary Loading', () => (
    <Button variant={Button.variants.SECONDARY} loading onClick={action('clicked')} />
  ))
  .add('Disabled Loading', () => <Button disabled loading onClick={action('clicked')} />)
  .add('Toggle Loading', () => <ToggleButtonLoadingStateExample />)
  .add('Primary Link', () => (
    <Button href="#" onClick={action('clicked')}>
      Link
    </Button>
  ))
  .add('Secondary Link', () => (
    <Button href="#" variant={Button.variants.SECONDARY} onClick={action('clicked')}>
      Link
    </Button>
  ))
  .add('Primary Link Size M', () => (
    <Button href="#" size={Button.sizes.M} onClick={action('clicked')}>
      Link
    </Button>
  ))
  .add('Secondary Link Size M', () => (
    <Button
      href="#"
      size={Button.sizes.M}
      variant={Button.variants.SECONDARY}
      onClick={action('clicked')}
    >
      Link
    </Button>
  ));
