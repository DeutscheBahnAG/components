import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import EmailButton from './button';
import withEmail from '../withEmail';
import readme from './README.md';

storiesOf('Email / EmailButton', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withEmail)
  .add('default', () => <EmailButton href="https://id.bahn.de/">Go to BahnID</EmailButton>)
  .add('centered', () => (
    <EmailButton centered href="https://id.bahn.de/">
      Go to BahnID
    </EmailButton>
  ));
