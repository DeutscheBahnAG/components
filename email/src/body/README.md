# EmailBody

A component to display the actual content of the email. Should go between `EmailHeader` and `EmailFooter`.

## How to Install

```
yarn add @bahn-x/dbx-email-kit
```

## How to Use

```js
import { EmailBody } from '@bahn-x/dbx-email-kit'
```
```jsx
<EmailBody>
  Email content here.
</EmailBody>
```

You can use regular HTML markup as children, but beware that more complex or modern markup might not be supported by all mail clients!

### Safe to use (and properly styled) are:

* `<h1>` for headings
* `<h2>` for subheadings
* `<p>` for text paragraphs
* `<a>` for links
* `<br />` to force line breaks

### Do NOT use:

* `<header>` (use `<EmailHeader>` instead)
* `<footer>` (use `<EmailFooter>` instead)
* `<button>` (use `<EmailButton>` instead)
* `<hr />` (use `<EmailSeparator>` instead)
