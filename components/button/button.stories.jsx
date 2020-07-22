import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import clsx from 'clsx';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
import * as Icon from '../icon';
import Button, { validateVariantCombinations } from './button';
import buttonReadme from './README.md';

const ToggleButtonLoadingStateExample = () => {
  const [isLoading, setLoading] = useState(false);

  const toggleLoading = () => setLoading(!isLoading);

  return (
    <>
      <label htmlFor="toggleLoading" style={{ marginRight: '16px' }}>
        <input
          style={{ marginRight: '8px' }}
          id="toggleLoading"
          type="checkbox"
          onChange={toggleLoading}
          checked={isLoading}
        />
        Button is Loading
      </label>

      <Button loading={isLoading} onClick={action('clicked')}>
        I am not loading right now
      </Button>
    </>
  );
};

const DummyI18n = ({ i18nKey }) => (i18nKey === 'jsx' ? 'JSX' : '<Translation Missing>');

const MultipleBackgrounds = ({ children }) =>
  ['white', 'coolgray050', 'coolgray100', 'blue100'].map(color => (
    <div
      key={color}
      style={{
        alignItems: 'center',
        display: 'grid',
        gridGap: '24px',
        gridTemplateColumns: '1fr 1fr 1fr',
        flexDirection: 'column',
        background: tokens.palette[color],
        justifyContent: 'space-between',
        padding: tokens.spacing.m,
      }}
    >
      {children}
      {` on ${color}`}
    </div>
  ));

storiesOf('Components / Button', module)
  .addDecorator(withReadme(buttonReadme))
  .add('Overview', () => (
    <div>
      <p className="sg-text-style--copy-m">
        Below all possible combinations of <code>Button.sizes</code>, <code>Button.shapes</code>,
        and <code>Button.variants</code> as well as with and without Icon are listed. Crossed out
        combinations shouldn’t be used and will raise a props validation warning.
      </p>
      {Object.values(Button.variants).map(variant => (
        <Fragment key={variant}>
          <h2 className="sg-text-style--title-l sg-headline-with-margin">
            <code>Button.variants.{variant.toUpperCase().replace(/-/g, '_')}</code>
          </h2>
          <table className="sg-table">
            <thead>
              <tr>
                <th colSpan="3">&nbsp;</th>
                <th colSpan="2">
                  <code>Button.shapes.</code>
                </th>
              </tr>
              <tr>
                <th>
                  <code>Button.sizes.</code>
                </th>
                <th>Default</th>
                <th>With Icon</th>
                <th>
                  <code>SQUARE</code>
                </th>
                <th>
                  <code>ROUND</code>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.values(Button.sizes).map(size => (
                <tr key={`${variant}-${size}`}>
                  <th>
                    <code>{size.toUpperCase()}</code>
                  </th>
                  <td
                    className={clsx(`sg-buttons-${variant}-square-${size}`, {
                      'sg-not-allowed':
                        validateVariantCombinations({
                          size,
                          shape: Button.shapes.DEFAULT,
                          variant,
                          icon: false,
                        }) !== null,
                    })}
                  >
                    <Button variant={variant} size={size}>
                      Default
                    </Button>
                  </td>
                  {Object.values(Button.shapes).map(shape => {
                    const notAllowed =
                      validateVariantCombinations({ size, shape, variant, icon: true }) !== null;
                    return (
                      <td
                        key={`${variant}-${size}-${shape}`}
                        className={clsx(`sg-buttons-${variant}-square-${size}`, {
                          'sg-not-allowed': notAllowed,
                        })}
                      >
                        <Button
                          variant={variant}
                          size={size}
                          shape={shape}
                          icon={<Icon.NavigationClose />}
                        >
                          {shape === Button.shapes.DEFAULT ? 'Icon' : shape.toUpperCase()}
                        </Button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      ))}
      <style>.sg-table th, .sg-table td {'{text-align: center}'}</style>
    </div>
  ))
  .add('Primary', () => (
    <MultipleBackgrounds>
      <Button onClick={action('clicked')}>Primary Button</Button>
    </MultipleBackgrounds>
  ))
  .add('Secondary', () => (
    <MultipleBackgrounds>
      <Button variant={Button.variants.SECONDARY} onClick={action('clicked')}>
        Secondary Button
      </Button>
    </MultipleBackgrounds>
  ))
  .add('Solid', () => (
    <MultipleBackgrounds>
      <Button variant={Button.variants.SOLID} onClick={action('clicked')}>
        Solid Button
      </Button>
    </MultipleBackgrounds>
  ))
  .add('Primary with icon', () => (
    <Button icon={<Icon.ActionCheckCircle />} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary with icon', () => (
    <Button
      icon={<Icon.ActionDelete />}
      variant={Button.variants.SECONDARY}
      onClick={action('clicked')}
    >
      Secondary Button
    </Button>
  ))
  .add('Solid with icon', () => (
    <Button
      icon={<Icon.ActionDownload />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      Solid Button
    </Button>
  ))
  .add('Primary Square', () => (
    <Button shape={Button.shapes.SQUARE} icon={<Icon.ActionHeart />} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary Square', () => (
    <Button
      shape={Button.shapes.SQUARE}
      icon={<Icon.ActionHelp />}
      variant={Button.variants.SECONDARY}
      onClick={action('clicked')}
    >
      Secondary Button
    </Button>
  ))
  .add('Solid Square', () => (
    <Button
      shape={Button.shapes.SQUARE}
      icon={<Icon.ActionPrint />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      Solid Button
    </Button>
  ))
  .add('Solid Square with JSX tooltip', () => (
    <Button
      shape={Button.shapes.SQUARE}
      icon={<Icon.ActionSettings />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      <DummyI18n i18nKey="jsx" /> is allowed
    </Button>
  ))
  .add('Primary Round', () => (
    <Button shape={Button.shapes.ROUND} icon={<Icon.ActionSearch />} onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Secondary Round', () => (
    <Button
      shape={Button.shapes.ROUND}
      icon={<Icon.ActionStar />}
      variant={Button.variants.SECONDARY}
      onClick={action('clicked')}
    >
      Secondary Button
    </Button>
  ))
  .add('Solid Round', () => (
    <Button
      shape={Button.shapes.ROUND}
      icon={<Icon.ActionZoomIn />}
      variant={Button.variants.SOLID}
      onClick={action('clicked')}
    >
      Solid Button
    </Button>
  ))
  .add('Solid hover only', () => (
    <Button
      shape={Button.shapes.ROUND}
      icon={<Icon.ActionVisibility />}
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
