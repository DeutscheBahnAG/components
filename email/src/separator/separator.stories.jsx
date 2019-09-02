import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import EmailSeparator from './separator';
import withEmail from '../withEmail';
import readme from './README.md';

storiesOf('Email / EmailSeparator', module)
  .addDecorator(withEmail)
  .addDecorator(withReadme(readme))
  .add('default', () => <EmailSeparator />);
