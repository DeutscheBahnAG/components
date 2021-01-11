import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Copy from './copy';
import teaserReadme from './README.md';

const stories = storiesOf('Components / Typography / Copy', module)
  .addDecorator(withReadme(teaserReadme))
  .add('Default', () => <Copy>Content</Copy>)
  .add('Bold', () => <Copy bold>Content</Copy>)
  .add('Wrapper element', () => (
    <p>
      <Copy>Content</Copy>
    </p>
  ))
  .add('Secondary', () => <Copy variant={Copy.variants.SECONDARY}>Content</Copy>);

Object.values(Copy.sizes).forEach((size) => {
  stories.add(`Size ${size.toUpperCase()}`, () => <Copy size={size}>Content</Copy>);
});
