import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import readme from './README.md';
import Track from './track';

storiesOf('Components / Track (platform)', module)
  .addDecorator(withReadme(readme))
  .add('Size XS (default)', () => <Track track="1" />)
  .add('Size XS (manual)', () => <Track size={Track.sizes.XS} track="1" />)
  .add('Size S', () => <Track size={Track.sizes.S} track="1" />)
  .add('Size M', () => <Track size={Track.sizes.M} track="1" />)
  .add('With fragment', () => <Track size={Track.sizes.XS} track="1a" />)
  .add('With section', () => <Track size={Track.sizes.XS} track="1 A-E" />)
  .add('Different naming', () => <Track size={Track.sizes.XS} track="Fern 1" />)
  .add('Add translation', () => (
    <Track track="1" labels={{ platform: 'Platform', platformAbbreviation: 'Pl.' }} />
  ));
