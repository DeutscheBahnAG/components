import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import readme from './README.md';
import Time from './time';

storiesOf('Components / Time, Triptime, Triptimespan', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Time dateTime="09:54" />);
