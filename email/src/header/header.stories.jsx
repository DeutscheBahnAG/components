import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailHeader from './header';
import withEmail from '../withEmail';

storiesOf('Email / EmailHeader', module)
  .addDecorator(withEmail)
  // .addDecorator(withReadme(buttonReadme))
  .add('default', () => <EmailHeader />);
