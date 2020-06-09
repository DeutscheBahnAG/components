import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import * as Icon from '../icon';
import Button from '../button';
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
  .add('Textfield with inline label', () => <StatefulTextfield inlineLabel="Inline label" />)
  .add('Textfield with inline label and placeholder', () => (
    <StatefulTextfield inlineLabel="Inline label" placeholder="Placeholder text" />
  ))
  .add('Disabled Textfield', () => <Textfield value="Disabled" disabled />)
  .add('Disabled Textfield with inline label', () => (
    <Textfield value="Disabled" inlineLabel="Inline label" disabled />
  ))
  .add('Readonly Textfield', () => <Textfield value="Readonly" readOnly />)
  .add('Readonly Textfield with inline label', () => (
    <Textfield value="Readonly" inlineLabel="Inline label" readOnly />
  ))
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
  .add('Text with with inline label and prefix', () => (
    <StatefulTextfield inlineLabel="Username" type="text" prefix="@" />
  ))
  .add('Text with Icon prefix', () => (
    <StatefulTextfield placeholder="Search" type="text" prefix={<Icon.ActionSearch />} />
  ))
  .add('Text with suffix', () => <StatefulTextfield type="text" suffix="@bahn.de" />)
  .add('Text with with inline label and suffix', () => (
    <StatefulTextfield inlineLabel="Email address" type="email" suffix="@bahn.de" />
  ))
  .add('Text with Icon suffix', () => (
    <StatefulTextfield type="text" suffix={<Icon.NavigationClose />} />
  ))
  .add('Text with Icon Button suffix', () => (
    <StatefulTextfield
      type="text"
      size={Textfield.sizes.L}
      suffix={
        <Button
          variant={Button.variants.HOVER_ONLY}
          shape={Button.shapes.ROUND}
          size={Button.sizes.S}
          icon={<Icon.NavigationClose />}
        >
          Clear
        </Button>
      }
    />
  ))
  .add('Text with Icon + Text Button suffix', () => (
    <StatefulTextfield
      type="text"
      size={Textfield.sizes.XL}
      suffix={
        <Button
          variant={Button.variants.SOLID}
          size={Button.sizes.M}
          icon={<Icon.NavigationClose />}
        >
          Clear
        </Button>
      }
    />
  ))
  .add('Email address', () => <StatefulTextfield defaultValue="info@bahn.de" type="email" />)
  .add('Phone number', () => <StatefulTextfield defaultValue="0180 6 996633" type="tel" />)
  .add('URL', () => <StatefulTextfield defaultValue="https://www.bahn.de" type="url" />)
  .add('Password', () => <StatefulTextfield defaultValue="secret" type="password" />)
  .add('Size S', () => (
    <Textfield size={Textfield.sizes.S} value="123" type="number" prefix="@" unit="€" />
  ))
  .add('Size M', () => (
    <Textfield size={Textfield.sizes.M} value="123" type="number" prefix="@" unit="€" />
  ))
  .add('Size L', () => (
    <Textfield size={Textfield.sizes.L} value="123" type="number" prefix="@" unit="€" />
  ))
  .add('Size XL', () => (
    <Textfield size={Textfield.sizes.XL} value="123" type="number" prefix="@" unit="€" />
  ));
