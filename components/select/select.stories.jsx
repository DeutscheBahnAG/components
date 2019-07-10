import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Select from './select';
import selectReadme from './README.md';

storiesOf('Components / Select', module)
  .addDecorator(withReadme(selectReadme))
  .add('Simple Select', () => (
    <Select options={[{ value: 1, label: 'Cats' }, { value: 2, label: 'Dogs' }]} />
  ))
  .add('Simple Select with selected option', () => (
    <Select value={2} options={[{ value: 1, label: 'Cats' }, { value: 2, label: 'Dogs' }]} />
  ))
  .add('Disabled Select', () => (
    <Select disabled options={[{ value: 1, label: 'Cats' }, { value: 2, label: 'Dogs' }]} />
  ));
