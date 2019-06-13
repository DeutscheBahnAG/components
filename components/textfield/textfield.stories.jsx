import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Textfield from './textfield';
import textfieldReadme from './README.md';

storiesOf('Components / Textfield', module)
  .addDecorator(withReadme(textfieldReadme))
  .add('Simple Textfield', () => <Textfield value="Simple Textfield" />)
  .add('Textfield with placeholder', () => <Textfield placeholder="Placeholder text" />)
  .add('Disabled Textfield', () => <Textfield value="Disabled" disabled />)
  .add('Readonly Textfield', () => <Textfield value="Readonly" readonly />)
  .add('Textarea', () => <Textfield value={'Textarea\nwith\nmany\nlines'} type="textarea" />)
  .add('Number', () => <Textfield value="123" type="number" />)
  .add('Number with unit', () => <Textfield value="123" type="number" unit="€" />)
  .add('Number with unit before', () => <Textfield value="123" type="number" unit="£" />)
  .add('Text with prefix', () => <Textfield value="bahn_de" type="text" prefix="@" />)
  .add('Text with suffix', () => <Textfield value="info" type="text" suffix="@bahn.de" />)
  .add('Email address', () => <Textfield value="info@bahn.de" type="email" />)
  .add('Phone number', () => <Textfield value="0180 6 996633" type="tel" />)
  .add('URL', () => <Textfield value="https://www.bahn.de" type="url" />)
  .add('Password', () => <Textfield value="secret" type="password" />);
