import React from 'react';
import { storiesOf } from '@storybook/react';
import Email from './email';
import EmailHeader from '../header/header';
import EmailFooter from '../footer/footer';
import EmailPinCode from '../pin-code/pin-code';
import EmailButton from '../button/button';

const template = (
  <Email preview="Email Template Preview">
    <EmailHeader />
    <h1>Headline</h1>
    <p>
      A paragraph with <a href="https://dbx.bahn-x.de">A link</a>.
    </p>
    <EmailPinCode>1234</EmailPinCode>
    <EmailButton href="https://dbx.bahn-x.de">CTA Button</EmailButton>
    <EmailFooter />
  </Email>
);

storiesOf('Email', module)
  // .addDecorator(withReadme(buttonReadme))
  .add('default template', () => template);
