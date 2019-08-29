import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailHeader from './header';

storiesOf('Email / EmailHeader', module)
  // .addDecorator(withReadme(buttonReadme))
  .add('default', () => <EmailHeader />);
