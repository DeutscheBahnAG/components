import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import * as Icons from '@bahn-x/dbx-icons';
import Button from '../button';
import Textfield from './textfield-doc';
import textfieldReadme from './README.md';

storiesOf('Components / Textfield, Passwordfield', module)
  .addDecorator(withReadme(textfieldReadme))
  .add('Simple Textfield', () => <Textfield value="Simple Textfield" />)
  .add('Textfield with placeholder', () => <Textfield placeholder="Placeholder text" />)
  .add('Textfield with inline label', () => <Textfield inlineLabel="Inline label" />)
  .add('Textfield with inline label and placeholder', () => (
    <Textfield inlineLabel="Inline label" placeholder="Placeholder text" />
  ))
  .add('Disabled Textfield', () => <Textfield value="Disabled" disabled />)
  .add('Disabled Textfield with inline label', () => (
    <Textfield value="Disabled" inlineLabel="Inline label" disabled />
  ))
  .add('Readonly Textfield', () => <Textfield value="Readonly" readOnly />)
  .add('Readonly Textfield with inline label', () => (
    <Textfield value="Readonly" inlineLabel="Inline label" readOnly />
  ))
  .add('Textarea', () => <Textfield value={'Textarea\nwith\nmany\nlines'} type="textarea" />)
  .add('Number', () => <Textfield value="123" type="number" />)
  .add('Number with unit', () => <Textfield value="123" type="number" unit="€" />)
  .add('Number with unit before', () => <Textfield value="123" type="number" unit="£" />)
  .add('Text with prefix', () => <Textfield value="bahn_de" type="text" prefix="@" />)
  .add('Text with with inline label and prefix', () => (
    <Textfield inlineLabel="Username" type="text" prefix="@" />
  ))
  .add('Text with Icon prefix', () => (
    <Textfield placeholder="Search" type="text" prefix={<Icons.ActionSearch />} />
  ))
  .add('Text with suffix', () => <Textfield type="text" suffix="@bahn.de" />)
  .add('Text with with inline label and suffix', () => (
    <Textfield inlineLabel="Email address" type="email" suffix="@bahn.de" />
  ))
  .add('Text with Icon suffix', () => <Textfield type="text" suffix={<Icons.NavigationClose />} />)
  .add('Text with Icon Button suffix', () => (
    <Textfield
      type="text"
      size={Textfield.sizes.L}
      suffix={
        <Button
          variant={Button.variants.HOVER_ONLY}
          shape={Button.shapes.ROUND}
          size={Button.sizes.S}
          icon={<Icons.NavigationClose />}
        >
          Clear
        </Button>
      }
    />
  ))
  .add('Text with Icon + Text Button suffix', () => (
    <Textfield
      type="text"
      size={Textfield.sizes.XL}
      suffix={
        <Button
          variant={Button.variants.SOLID}
          size={Button.sizes.M}
          icon={<Icons.NavigationClose />}
        >
          Clear
        </Button>
      }
    />
  ))
  .add('Email address', () => <Textfield value="info@bahn.de" type="email" />)
  .add('Phone number', () => <Textfield value="0180 6 996633" type="tel" />)
  .add('URL', () => <Textfield value="https://www.bahn.de" type="url" />)
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
