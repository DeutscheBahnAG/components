import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailButton from './button';
import withEmail from '../withEmail';

storiesOf('Email / EmailButton', module)
  // .addDecorator(withReadme(buttonReadme))
  .addDecorator(withEmail)
  .add('default', () => <EmailButton>I am a Button</EmailButton>)
  .add('linked', () => <EmailButton href="https://id.bahn.de/">Go to BahnID</EmailButton>);
