import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Button from './button';
import buttonReadme from './README.md';

storiesOf('Components / Button', module)
  .addDecorator(withReadme(buttonReadme))
  .add('Primary', () => <Button onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary', () => (
    <Button variant="secondary" onClick={action('clicked')}>
      Secondary Button
    </Button>
  ))
  .add('Primary full width', () => (
    <Button fullWidth onClick={action('clicked')}>
      Primary Full Width Button
    </Button>
  ))
  .add('Secondary full width', () => (
    <Button variant="secondary" fullWidth onClick={action('clicked')}>
      Secondary Full Width Button
    </Button>
  ))
  .add('Primary Small', () => (
    <Button onClick={action('clicked')} size="small">
      Primary Small Button
    </Button>
  ))
  .add('Secondary Small', () => (
    <Button variant="secondary" onClick={action('clicked')} size="small">
      Secondary Small Button
    </Button>
  ))
  .add('Primary submit', () => (
    <Button type="submit" onClick={action('clicked')}>
      Primary Submit Button
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Disabled Button
    </Button>
  ));
