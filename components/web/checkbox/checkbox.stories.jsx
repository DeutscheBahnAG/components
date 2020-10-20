import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Checkbox from './checkbox-doc';
import Button from '../button/button';
import Copy from '../copy/copy';
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
  .add('With Links', () => (
    <>
      <Checkbox onClick={action('clicked')} label="I accept the Terms and Conditions" />
      <p style={{ marginTop: '4px', marginLeft: '26px' }}>
        <Copy>
          <a href="#terms">Read our Terms and Conditions</a>
        </Copy>
      </p>
    </>
  ))
  .add('Default disabled', () => <Checkbox disabled onClick={action('clicked')} label="Checkbox" />)
  .add('Checked disabled', () => (
    <Checkbox checked disabled onClick={action('clicked')} label="Checkbox" />
  ))
  .add('Indeterminate disabled', () => (
    <Checkbox indeterminate disabled onClick={action('clicked')} label="Checkbox" />
  ));
