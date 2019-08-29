import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailButton from './button';

storiesOf('Email / EmailButton', module)
  // .addDecorator(withReadme(buttonReadme))
  .add('default', () => <EmailButton>I am a Button</EmailButton>)
  .add('linked', () => <EmailButton href="https://id.bahn.de/">Go to BahnID</EmailButton>);
