import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';
import readme from './README.md';
import Triptimespan from './triptimespan';

storiesOf('Components / Time, Triptime, Triptimespan', module)
  .addDecorator(withReadme(readme))
  .add('Triptimespan', () => <Triptimespan departureDateTime="09:54" arrivalDateTime="12:48" />)
  .add('Triptimespan with delayed departure', () => (
    <Triptimespan
      departureDateTime="09:54"
      predictedDepartureDateTime="09:57"
      arrivalDateTime="12:48"
    />
  ))
  .add('Triptimespan with delayed arrival', () => (
    <Triptimespan
      departureDateTime="09:54"
      arrivalDateTime="12:48"
      predictedArivalDateTime="12:49"
    />
  ))
  .add('Triptimespan with delayed departure and arrival', () => (
    <Triptimespan
      departureDateTime="09:54"
      predictedDepartureDateTime="09:57"
      arrivalDateTime="12:48"
      predictedArivalDateTime="13:07"
    />
  ))
  .add('Smaller size (using copy.s)', () => (
    <p
      style={{
        fontSize: `${tokens.textsize['copy.s']}px`,
        lineHeight: `${tokens.lineheight['copy.s']}px`,
      }}
    >
      <Triptimespan
        departureDateTime="09:54"
        predictedDepartureDateTime="09:57"
        arrivalDateTime="12:48"
        predictedArivalDateTime="13:07"
      />
    </p>
  ));
