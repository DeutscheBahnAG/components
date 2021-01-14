import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Container from '../container';
import teaserReadme from './README.md';

const CenteredWrapper = (storyFn) => (
  <div className="sg-full-page dbx-layout--centered">{storyFn()}</div>
);
const LeftAlignedWrapper = (storyFn) => (
  <div className="sg-full-page dbx-layout--left-aligned">{storyFn()}</div>
);

storiesOf('Components / Layout / Container (centred)', module)
  .addDecorator(withReadme(teaserReadme))
  .addDecorator(CenteredWrapper)
  .add('Content', () => <Container width={Container.widths.CONTENT}>Content</Container>)
  .add('Extended', () => <Container width={Container.widths.EXTENDED}>Content</Container>)
  .add('Full', () => <Container width={Container.widths.FULL}>Content</Container>);
storiesOf('Components / Layout / Container (left-aligned)', module)
  .addDecorator(withReadme(teaserReadme))
  .addDecorator(LeftAlignedWrapper)
  .add('Content', () => <Container width={Container.widths.CONTENT}>Content</Container>)
  .add('Extended', () => <Container width={Container.widths.EXTENDED}>Content</Container>)
  .add('Full', () => <Container width={Container.widths.FULL}>Content</Container>);
