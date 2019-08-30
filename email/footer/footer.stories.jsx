import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailFooter from './footer';
import withEmail from '../withEmail';

storiesOf('Email / EmailFooter', module)
  // .addDecorator(withReadme(buttonReadme))
  .addDecorator(withEmail)
  .add('default', () => <EmailFooter />)
  .add('with custom imprint', () => <EmailFooter imprint="custom imprint" />)
  .add('with custom footer links', () => (
    <EmailFooter>
      <p>
        Wenn du keine E-Mail mehr erhalten möchtest, dann{' '}
        <a href="https://my-dbx-powered-website.bahn-x.de/unsubscribe">klicke hier</a>.
      </p>
    </EmailFooter>
  ));
