import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Loadingindicator from './loadingindicator';
import readme from './README.md';

storiesOf('Components / Loadingindicator', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Loadingindicator />)
  .add('Size XS', () => <Loadingindicator size={Loadingindicator.sizes.XS} />)
  .add('Size S', () => <Loadingindicator size={Loadingindicator.sizes.S} />)
  .add('Size M', () => <Loadingindicator size={Loadingindicator.sizes.M} />)
  .add('Size L', () => <Loadingindicator size={Loadingindicator.sizes.L} />)
  .add('Size XL', () => <Loadingindicator size={Loadingindicator.sizes.XL} />)
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
