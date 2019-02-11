import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Button from './button';
import buttonReadme from './README.md';

storiesOf('Components / Button', module)
  .addDecorator(withReadme(buttonReadme))
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('full width version', () => (
    <Button fullWidth onClick={action('clicked')}>
      Full Width Button
    </Button>
  ));
