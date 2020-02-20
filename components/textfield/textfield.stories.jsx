import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Textfield from './textfield';
import textfieldReadme from './README.md';

const StatefulTextfield = ({ defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  return <Textfield {...props} value={value} onChange={event => setValue(event.target.value)} />;
};

StatefulTextfield.propTypes = {
  defaultValue: PropTypes.string,
};

StatefulTextfield.defaultProps = {
  defaultValue: '',
};

storiesOf('Components / Textfield', module)
  .addDecorator(withReadme(textfieldReadme))
  .add('Simple Textfield', () => <StatefulTextfield defaultValue="Simple Textfield" />)
  .add('Textfield with placeholder', () => <StatefulTextfield placeholder="Placeholder text" />)
  .add('Disabled Textfield', () => <Textfield value="Disabled" disabled />)
  .add('Readonly Textfield', () => <Textfield value="Readonly" readOnly />)
  .add('Textarea', () => (
    <StatefulTextfield defaultValue={'Textarea\nwith\nmany\nlines'} type="textarea" />
  ))
  .add('Number', () => <StatefulTextfield defaultValue="123" type="number" />)
  .add('Number with unit', () => <StatefulTextfield defaultValue="123" type="number" unit="€" />)
  .add('Number with unit before', () => (
    <StatefulTextfield defaultValue="123" type="number" unit="£" />
  ))
  .add('Text with prefix', () => (
    <StatefulTextfield defaultValue="bahn_de" type="text" prefix="@" />
  ))
  .add('Text with suffix', () => <StatefulTextfield type="text" suffix="@bahn.de" />)
  .add('Email address', () => <StatefulTextfield defaultValue="info@bahn.de" type="email" />)
  .add('Phone number', () => <StatefulTextfield defaultValue="0180 6 996633" type="tel" />)
  .add('URL', () => <StatefulTextfield defaultValue="https://www.bahn.de" type="url" />)
  .add('Password', () => <StatefulTextfield defaultValue="secret" type="password" />);
