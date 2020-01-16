import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Checkbox from './checkbox';
import Button from '../button/button';
import checkboxReadme from './README.md';

class ToggleCheckboxIndeterminateStateExample extends React.Component {
  state = { isIndeterminate: true };

  setIndeterminate = () => {
    this.setState({ isIndeterminate: true });
  };

  unsetIndeterminate = () => {
    this.setState({ isIndeterminate: false });
    action('clicked');
  };

  render() {
    const { isIndeterminate } = this.state;
    return (
      <>
        <Checkbox
          indeterminate={isIndeterminate}
          onClick={this.unsetIndeterminate}
          label="Checkbox"
        />
        <br />
        <br />
        <Button type="button" disabled={isIndeterminate} size="s" onClick={this.setIndeterminate}>
          Reset Checkbox to indeterminate
        </Button>
      </>
    );
  }
}

storiesOf('Components / Checkbox', module)
  .addDecorator(withReadme(checkboxReadme))
  .add('Default', () => <Checkbox onClick={action('clicked')} label="Checkbox" />)
  .add('Checked', () => <Checkbox defaultChecked onClick={action('clicked')} label="Checkbox" />)
  .add('Indeterminate', () => <ToggleCheckboxIndeterminateStateExample />)
  .add('Links inside the label', () => (
    <Checkbox
      onClick={action('clicked')}
      label={
        <>
          I accept the{` `}
          <a href="#terms">Terms and Conditions</a>.
        </>
      }
    ></Checkbox>
  ))
  .add('Default disabled', () => <Checkbox disabled onClick={action('clicked')} label="Checkbox" />)
  .add('Checked disabled', () => (
    <Checkbox defaultChecked disabled onClick={action('clicked')} label="Checkbox" />
  ))
  .add('Indeterminate disabled', () => (
    <Checkbox indeterminate disabled onClick={action('clicked')} label="Checkbox" />
  ));
