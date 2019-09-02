import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import EmailHeader from './header';
import withEmail from '../withEmail';
import readme from './README.md';

storiesOf('Email / EmailHeader', module)
  .addDecorator(withEmail)
  .addDecorator(withReadme(readme))
  .add('default', () => <EmailHeader />);