import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Loadingindicator from './loadingindicator';
import readme from './README.md';

storiesOf('Components / Loadingindicator', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Loadingindicator />)
  .add('Large size', () => <Loadingindicator size="large" />)
  .add('On darker background', () => (
    <div
      style={{
        color: '#fff',
        backgroundColor: '#ec0016',
        padding: '16px',
        display: 'inline-block',
      }}
    >
      <Loadingindicator />
    </div>
  ));
