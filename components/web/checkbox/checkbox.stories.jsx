import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Checkbox from './checkbox-doc';
import Button from '../button/button';
import checkboxReadme from './README.md';

const ToggleCheckboxIndeterminateStateExample = () => {
  const [isIndeterminate, setIndeterminate] = useState(true);

  const handleButtonClick = () => {
    setIndeterminate(true);
  };

  const handleCheckboxClick = () => {
    setIndeterminate(false);
    action('clicked');
  };

  return (
    <>
      <Checkbox indeterminate={isIndeterminate} onClick={handleCheckboxClick} label="Checkbox" />
      <br />
      <br />
      <Button type="button" disabled={isIndeterminate} size="s" onClick={handleButtonClick}>
        Reset Checkbox to indeterminate
      </Button>
    </>
  );
};

storiesOf('Components / Checkbox', module)
  .addDecorator(withReadme(checkboxReadme))
  .add('Default', () => <Checkbox onClick={action('clicked')} label="Checkbox" />)
  .add('Checked', () => <Checkbox checked onClick={action('clicked')} label="Checkbox" />)
  .add('Indeterminate', () => <ToggleCheckboxIndeterminateStateExample />)
  .add('With 1 link (outside the label)', () => (
    <>
      <Checkbox
        onClick={action('clicked')}
        label={
          <>
            I accept the <b>Terms and Conditions</b>.
          </>
        }
        footer={<a href="#terms">Read our Terms and Conditions</a>}
      />
    </>
  ))
  .add('With 2 links (outside the label)', () => (
    <>
      <Checkbox
        onClick={action('clicked')}
        label={
          <>
            I accept the <b>Terms and Conditions</b> and <b>XYZ</b>.
          </>
        }
        footer={
          <>
            <a href="#terms">Read our Terms and Conditions</a>
            {' ' /* add space in between */}
            <a href="#terms">Read about XYZ</a>
          </>
        }
      />
    </>
  ))
  .add('Default disabled', () => <Checkbox disabled onClick={action('clicked')} label="Checkbox" />)
  .add('Checked disabled', () => (
    <Checkbox checked disabled onClick={action('clicked')} label="Checkbox" />
  ))
  .add('Indeterminate disabled', () => (
    <Checkbox indeterminate disabled onClick={action('clicked')} label="Checkbox" />
  ));
