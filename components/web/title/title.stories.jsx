import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Title from './title';
import teaserReadme from './README.md';

const stories = storiesOf('Components / Typography / Title', module)
  .addDecorator(withReadme(teaserReadme))
  .add('Default', () => <Title>Content</Title>)
  .add('Light', () => <Title light>Content</Title>)
  .add('Wrapper element', () => (
    <h1>
      <Title>Content</Title>
    </h1>
  ))
  .add('Secondary', () => (
    <Title component="h1" variant={Title.variants.SECONDARY}>
      Content
    </Title>
  ));

Object.values(Title.sizes).forEach((size) => {
  stories.add(`Size ${size.toUpperCase()}`, () => <Title size={size}>Content</Title>);
});
