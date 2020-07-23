import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import readme from './README.md';
import Triptime from './triptime';

storiesOf('Components / Time, Triptime, Triptimespan', module)
  .addDecorator(withReadme(readme))
  .add('Triptime (= arrival or departure)', () => <Triptime dateTime="09:54" />)
  .add('Triptime with short delay', () => <Triptime dateTime="09:54" predictedDateTime="09:57" />)
  .add('Triptime with long delay', () => <Triptime dateTime="09:54" predictedDateTime="10:04" />)
  .add('Triptime start', () => (
    <Triptime stopType={Triptime.stopTypes.START} dateTime="09:54" predictedDateTime="09:57" />
  ))
  .add('Triptime destination', () => (
    <Triptime
      stopType={Triptime.stopTypes.DESTINATION}
      dateTime="09:54"
      predictedDateTime="09:57"
    />
  ))
  .add('Triptime intermediate', () => (
    <Triptime
      stopType={Triptime.stopTypes.INTERMEDIATE}
      dateTime="09:54"
      predictedDateTime="09:57"
    />
  ))
  .add('Triptime current', () => (
    <Triptime stopType={Triptime.stopTypes.CURRENT} dateTime="09:54" predictedDateTime="09:57" />
  ));
