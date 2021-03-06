# Code

A component to display a piece of code with optional syntax highlighting.

As syntax highlighting configs can increase the package size a lot and we do not want to make any assumptions about which programming language you use in your code snippets, we do not include any language configs by default.

The code component builds on top of the [refractor](https://github.com/wooorm/refractor) library and uses their language configs. [See the list of supported languages here](https://github.com/wooorm/refractor#syntaxes).

## Basic example (no syntax highlighting)

```jsx
// import the Code component
import { Code } from '@db-design/react-extra';

// use it like this:
<Code>{`a {
  font-weight: bold
}`}</Code>;
```

## With syntax highlighting

```jsx
// import the Code component
import { Code } from '@db-design/react-extra';
// import the syntax highlighting config for your language:
import css from 'refractor/lang/css';

const { hasLanguage, registerLanguage } = Code;

// register your language, so that it can be used by the component
if (!hasLanguage('css')) {
  registerLanguage(css);
}

// use it like this:
<Code language="css">{`a {
  font-weight: bold
}`}</Code>;
```
