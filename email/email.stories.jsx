import React from 'react';
import { storiesOf } from '@storybook/react';
import Email from './email';
import EmailHeader from './header/header';
import EmailFooter from './footer/footer';
import EmailPinCode from './pin-code/pin-code';
import EmailButton from './button/button';
import EmailBody from './body/body';

const template = (
  <Email preview="Email Template Preview">
    <EmailHeader />
    <EmailBody>
      <h1>Headline</h1>
      <p>
        A paragraph with <a href="https://dbx.bahn-x.de">A link</a>.
      </p>
      <EmailPinCode>1234</EmailPinCode>
      <EmailButton href="https://dbx.bahn-x.de">CTA Button</EmailButton>
    </EmailBody>
    <EmailFooter />
  </Email>
);

storiesOf('Email', module)
  // .addDecorator(withReadme(buttonReadme))
  .add('default template', () => template);
