import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import withEmail from '../withEmail';
import readme from './README.md';
import EmailBody from './email-body';

storiesOf('Email / EmailBody', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withEmail)
  .add('with examplary content', () => (
    <EmailBody>
      <h1>Headline</h1>
      <p>
        A paragraph with a <a href="https://dbx.bahn-x.de">link</a>.
      </p>
      <p>Another paragraph.</p>
      <h2>A subheadline</h2>
      <p>More text.</p>
    </EmailBody>
  ));
