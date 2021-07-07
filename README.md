# BahnX React components

React components for building websites and applications fast in the look
and feel of Deutsche Bahn AG.

## Usage

```bash
yarn add @db-design/styles;
yarn add @db-design/react-icons;
yarn add @db-design/react;
yarn add @db-design/react-extra;
```

## How to Develop

Clone this repository and start adding components. On the repository for the web site that will include the components, add this repository as a dependency in your `package.json`.

### Adding a New Component

This is a multi-package repository. Each component library is a separate Node package with it's own `package.json`. This is managed via [Yarn workspaces](https://yarnpkg.com/en/docs/workspaces). They reside in `./packages`.

- `react`: Core components, for general use.
- `react-extra`: Additional components for edge use cases.
- `react-icons`: Icon components.

Components should be placed in the appropriate package folder, in their own subfolder.

A component typically consists of:

- A `index.js` re-exporting the default export of `component-name.jsx`.
- A `component-name.jsx` file containing the React component as a default export. Be sure to include [prop types and default props](https://reactjs.org/docs/typechecking-with-proptypes.html) for the component.
- A optional `component-name-doc.jsx` which can contain a modified version of the component for documentation (e.g. inline Modals)
- A `component-name.test.jsx` file containing all unit tests for the component.
- A `README.md` containing the documentation for this component in Markdown format
- A `component-name.scss` file containing all styles for the components
- A file containing the snapshots generated from the stories of this component. This will be taken care of automatically and placed in a separate folder so you don't need to care about it.

_(Replace component-name with the name of your component written in kebab case accordingly)_

**Please ensure to follow these naming conventions as all related build processes are set up to recognize files following the naming scheme.** If you did successfully, a documentation page for the component will show up when you run Storybook.

In order to import your React component easily in other repositories, add it as named export to the `components/index.js` file. Optionally, you can also add an `index.js` file in your component subfolder.

In your target application, you can then import the component like this:

```javascript
import { Button } from '@db-design/react';
```

### Available Tasks

- `yarn build`: Transpiles component libraries to `./dist/[components-package-folder]` to be published via NPM
  - `yarn build:react`: Transpiles just the `@db-design/react` package to `./dist/web`.
  - `yarn build:react-extra`: Transpiles just the `@db-design/react-extra` package to `./dist/web-extra`.
  - `yarn build:react-icons`: Generates `@db-design/react-icons` from SVG sources. This _must_ run before any other script that requires the `@db-design/react-icons` package, as the javascript files do not exist before that.
- `yarn build:styleguidist`: Generate Styleguidist documentation to `./build`
- `yarn build:sassdoc`: Generate SCSS documentation to `./build/sassdoc`
- `yarn build:docs`: Lints and tests components and then builds Styleguidist and Sassdoc pages to `./build`
- `yarn lint`: Lint JS & SCSS
- `yarn lint:js`: Lint JS/TS code
- `yarn lint:js:fix`: Auto-fix linting errors
- `yarn lint:styles`: Lint SCSS code
- `yarn lint:styles:fix`: Auto-fix linting errors
- `yarn test`: Run unit tests and show coverage
- `yarn coverage`: Run unit tests and show coverage
- `yarn update-snapshots`: [Update jest snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html) in case you intentionally changed the markup of your components
- `yarn commit`: See [writing commits](#writing-commits)
- release:
  - `yarn release:styles` - Run release-it for `styles`.
  - `yarn release:react-icons` - Run release-it for `react-icons`. It compiles required files as well.
  - `yarn release:react` - Run release-it for `react`. It compiles required files as well.
  - `yarn release:react-extra` - Run release-it for `react-extra`. It compiles required files as well.

### Writing Commits

A commit message should look like:

```
type: [TICKET-NUMBER] Short imperative title

[Body,
possibly multi line]

[BREAKING CHANGE:
Description of breaking change]
```

Optional parts are set in square brackets.

Valid examples of commit messages:

- ```
  feat: DBXPORTAL-123 Add focus ring to Button
  ```
- ```
  fix: Make focus ring work in Firefox

  In Firefox the focus ring did not appear the first time the focus was set.
  ```

- ```
  chore: Update dependencies
  ```
- ```
  feat: DBXPORTAL-124 Implement new sizes

  The new sizes improve consistency between DBX and Product XYZ.

  BREAKING CHANGE:
  All buttons increased by 2 pixels in height.
  ```

Rules (you can also use [Commitizen](#commitizen) which helps generate commit messages):

- Chose a _type:_
  - `feat`: A new feature/visual update (build in JavaScript and/or CSS)
  - `fix`: A bug fix
  - `docs`: Documentation only changes
  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc, **this is NOT about styling components with CSS**)
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `perf`: A code change that improves performance
  - `test`: Adding missing tests
  - `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
  - `revert`: Revert to a commit
- Separate the _type_ with `:` (colon + space)
- Optional Jira _ticket number_ (e.g. `DBXPORTAL-123`); if set, add one space afterwards
- Mandatory _subject_ – imperative style, 50 characters max, start titlecase, no period at the end
- Optional _body_
  - Separate with one empty line from the first line (_type, ticket number and subject_)
  - Separate paragraphs with one empty line
  - Lists starting with `-` are OK (start titlecase)
- Optional _breaking change_
  - Separate with one empty line from the first line (_type, ticket number and subject_) or the _body_ (if used)
  - Start with `BREAKING CHANGE:` (all uppercase)
  - Provide a summary of the breaking change in the next line

### Commitizen

Instead of following all [commit rules](#writing-commits), you can use [Commitizen] which will ask few questions to generate the commit message automatically.

```shell
yarn commit
```

**Tip:** You can add all arguments you can add to `git commit` like `-p` to interactively select the lines to commit:

```shell
yarn commit -p
```

[commitizen]: https://github.com/commitizen/cz-cli

### Pre-commit Hooks

When attempting to commit files in this repository, some tasks will automatically run to ensure a consistently high level of code quality:

- **JavaScript files (.js and .jsx):**

  - Runs `eslint` and automatically fixes auto-fixable issues ([see related JS guidelines here](https://github.com/airbnb/javascript)).
  - Runs `prettier` and auto-formats your code ([see what it does here](https://github.com/prettier/prettier)).
  - Runs all unit tests concerning the committed files with `jest`.

- **Sass files (.scss):**
  - Runs `stylelint` and automatically fixes auto-fixable issues ([see related Sass guidelines here](https://sass-guidelin.es/)).

If any of the tasks fail (which means your code does not lint or unit tests are failing), your commit will be aborted.

### Modern JavaScript Transpilation

You can use any modern JavaScript in your components that can be automatically transpiled. The Babel configuration is set up to recognize ES2017 and beyond. Be aware that if you use non-transpilable modern JavaScript functions like `Object.entries` or similiar, you need to [manually](https://github.com/babel/babel/tree/master/packages/babel-polyfill) or [automatically](https://polyfill.io/v2/docs/) include a polyfill in your target repository so that browsers can understand your code.

## Licenses

The code is licensed under the [MIT License](blob/main/LICENSE.md).

The DB logo is protected by trademark law. Further symbols/designs which can be called up under https://marketingportal.extranet.deutschebahn.com/ are partially protected by trademark law and/or copyright/design law. They may only be used in business transactions with the express prior consent of Deutsche Bahn AG. The consent is to be obtained with reasonable advance notice at <markenrecht@deutschebahn.com>.
