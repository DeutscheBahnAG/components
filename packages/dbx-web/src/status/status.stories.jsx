import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import readme from './README.md';
import Status from './status';

storiesOf('Components / Status', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Status message="This is a status" />)
  .add('Success', () => (
    <Status message="This feature is included" variant={Status.variants.SUCCESS} />
  ))
  .add('Info', () => <Status message="Works as expected" variant={Status.variants.INFO} />)
  .add('Warning', () => (
    <Status message="This feature is not included" variant={Status.variants.WARNING} />
  ))
  .add('Error', () => (
    <Status message="You might not reach a connecting train" variant={Status.variants.ERROR} />
  ))
  .add('Fatal', () => <Status message="The train got cancelled" variant={Status.variants.FATAL} />)
  .add('Long text', () => (
    <Status message="The message of the Status can get a very long text which is sometimes needed. In this case the label wraps nicely and the checkbox stays aligned with the first line of the label." />
  ));
