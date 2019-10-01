import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Button from './button';
import buttonReadme from './README.md';

class ToggleButtonLoadingStateExample extends React.Component {
  state = { isLoading: false };

  toggleLoading = () =>
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <label htmlFor="toggleLoading" style={{ marginRight: '16px' }}>
          <input
            style={{ marginRight: '8px' }}
            id="toggleLoading"
            type="checkbox"
            onChange={this.toggleLoading}
            checked={isLoading}
          />
          Button is Loading
        </label>

        <Button loading={isLoading} onClick={action('clicked')}>
          I am not loading right now
        </Button>
      </>
    );
  }
}

storiesOf('Components / Button', module)
  .addDecorator(withReadme(buttonReadme))
  .add('Primary', () => <Button onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary', () => (
    <Button variant="secondary" onClick={action('clicked')}>
      Secondary Button
    </Button>
  ))
  .add('Width', () => (
    <>
      <Button onClick={action('clicked')}>Short label</Button>
      <br />
      <br />
      <Button onClick={action('clicked')}>A very long label that extends the width</Button>
    </>
  ))
  .add('Primary full width', () => (
    <Button fullWidth onClick={action('clicked')}>
      Primary Full Width Button
    </Button>
  ))
  .add('Secondary full width', () => (
    <Button variant="secondary" fullWidth onClick={action('clicked')}>
      Secondary Full Width Button
    </Button>
  ))
  .add('Primary Small', () => (
    <Button onClick={action('clicked')} size="small">
      Primary Small Button
    </Button>
  ))
  .add('Secondary Small', () => (
    <Button variant="secondary" onClick={action('clicked')} size="small">
      Secondary Small Button
    </Button>
  ))
  .add('Primary submit', () => (
    <Button type="submit" onClick={action('clicked')}>
      Primary Submit Button
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Disabled Button
    </Button>
  ))
  .add('Primary Loading', () => <Button loading onClick={action('clicked')} />)
  .add('Primary Loading small', () => <Button size="small" loading onClick={action('clicked')} />)
  .add('Primary Loading full width', () => <Button fullWidth loading onClick={action('clicked')} />)
  .add('Secondary Loading', () => (
    <Button variant="secondary" loading onClick={action('clicked')} />
  ))
  .add('Disabled Loading', () => <Button disabled loading onClick={action('clicked')} />)
  .add('Toggle Loading', () => <ToggleButtonLoadingStateExample />)
  .add('Primary Link', () => (
    <Button href="#" onClick={action('clicked')}>
      Link
    </Button>
  ))
  .add('Secondary Link', () => (
    <Button href="#" variant="secondary" onClick={action('clicked')}>
      Link
    </Button>
  ))
  .add('Primary Link small', () => (
    <Button href="#" size="small" onClick={action('clicked')}>
      Link
    </Button>
  ))
  .add('Secondary Link small', () => (
    <Button href="#" size="small" variant="secondary" onClick={action('clicked')}>
      Link
    </Button>
  ));
