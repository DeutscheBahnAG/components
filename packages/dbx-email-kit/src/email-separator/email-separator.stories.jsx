import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import EmailSeparator from './email-separator';
import withEmail from '../with-email';
import readme from './README.md';

storiesOf('Email / EmailSeparator', module)
  .addDecorator(withEmail)
  .addDecorator(withReadme(readme))
  .addParameters({
    backgrounds: { disable: true },
  })
  .add('default', () => <EmailSeparator />);
