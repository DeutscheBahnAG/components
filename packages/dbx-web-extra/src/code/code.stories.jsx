import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import jsx from 'refractor/lang/jsx';
import scss from 'refractor/lang/scss';
import Code from './code';
import readme from './README.md';

const { registerLanguage } = Code;

const jsxCodeExample = `import React, { useState } from 'react';
import { Button } from '@bahn-x/dbx-web';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    // startSlowAction();
  };

  return (
    <Button loading={isLoading} onClick={onClick}>Start slow action</Button>
  );
};`;

const scssCodeExample = `/// Fixed ratio helper
/// @param {Number} $ratio - Unitless number or calculation defining ratio
/// @group layout
/// @example scss
///   .foo {
///     @include fixed-ratio(4 / 3);
///   }
@mixin dbx-fixed-ratio($ratio) {
  display: block;
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 0;
    padding-top: percentage($ratio);
    width: 100%;
  }
}`;

storiesOf('Components / Code', module)
  .addDecorator(withReadme(readme))
  .add('JavaScript / JSX', () => {
    registerLanguage(jsx);
    return <Code language="jsx">{jsxCodeExample}</Code>;
  })
  .add('SCSS', () => {
    registerLanguage(scss);
    return <Code language="scss">{scssCodeExample}</Code>;
  })
  .add('Basic (no syntax highlighting)', () => <Code>{scssCodeExample}</Code>)
  .add('Inline', () => {
    registerLanguage(scss);
    return (
      <div>
        In order to prevent a website from scrolling behind a modal dialogue, set{' '}
        <Code inline language="scss">
          {'html, body { overflow-y: hidden; }'}
        </Code>{' '}
        when the dialogue is open.
      </div>
    );
  });
