# EmailBody

A component to display the actual content of the email. Should go between `EmailHeader` and `EmailFooter`.

## How to Install

```shell
yarn add @bahn-x/dbx-email-kit
```

## How to Use

```jsx
import { EmailBody } from '@bahn-x/dbx-email-kit';
<EmailBody>Email content here.</EmailBody>;
```

You can use regular HTML markup as children, but beware that more complex or modern markup might not be supported by all mail clients!

### Safe to use (and properly styled) are:

- `<h1>` for headings
- `<h2>` for subheadings
- `<p>` for text paragraphs
- `<a>` for links
- `<br />` to force line breaks

```jsx
import { EmailBody } from '@bahn-x/dbx-email-kit';
<EmailBody>
  <h1>Headline</h1>
  <p>
    A paragraph with a <a href="https://dbx.bahn-x.de">link</a>.
  </p>
  <p>Another paragraph.</p>
  <h2>A subheadline</h2>
  <p>More text.</p>
</EmailBody>;
```

### Do NOT use:

- `<header>` (use `<EmailHeader>` instead)
- `<footer>` (use `<EmailFooter>` instead)
- `<button>` (use `<EmailButton>` instead)
- `<hr />` (use `<EmailSeparator>` instead)
