import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Email from './email';
import EmailHeader from '../header/header';
import EmailFooter from '../footer/footer';
import EmailPinCode from '../pincode/pincode';
import EmailButton from '../button/button';
import EmailBody from '../body/body';
import readme from './README.md';

const template = (
  <Email preview="Email Template Preview">
    <EmailHeader />
    <EmailBody>
      <h1>Headline</h1>
      <p>
        A paragraph with <a href="https://dbx.bahn-x.de">a link</a>.
      </p>
      <EmailPinCode>1234</EmailPinCode>
      <EmailButton href="https://dbx.bahn-x.de">CTA Button</EmailButton>
    </EmailBody>
    <EmailFooter />
  </Email>
);

storiesOf('Email / Email', module)
  .addDecorator(withReadme(readme))
  .add('default template', () => template);
