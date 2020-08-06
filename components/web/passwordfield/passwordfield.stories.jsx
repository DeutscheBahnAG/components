import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Passwordfield from './passwordfield-doc';
import passwordfieldReadme from './README.md';

storiesOf('Components / Textfield, Passwordfield', module)
  .addDecorator(withReadme(passwordfieldReadme))
  .add('Passwordfield size M', () => <Passwordfield size={Passwordfield.sizes.M} value="123" />)
  .add('Passwordfield size L', () => <Passwordfield size={Passwordfield.sizes.L} value="123" />)
  .add('Passwordfield size XL', () => <Passwordfield size={Passwordfield.sizes.XL} value="123" />)
  .add('Passwordfield with inline label', () => (
    <Passwordfield inlineLabel="Passwort" size={Passwordfield.sizes.XL} />
  ))
  .add('Passwordfield filled with inline label', () => (
    <Passwordfield value="123" inlineLabel="Passwort" size={Passwordfield.sizes.XL} />
  ))
  .add('Passwordfield disabled with inline label', () => (
    <Passwordfield disabled inlineLabel="Passwort" size={Passwordfield.sizes.XL} />
  ))
  .add('Passwordfield filled and disabled with inline label', () => (
    <Passwordfield disabled value="123" inlineLabel="Passwort" size={Passwordfield.sizes.XL} />
  ));
