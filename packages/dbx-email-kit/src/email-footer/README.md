# EmailFooter

A visually separated footer to be used below the email content.

## How to Install

```shell
yarn add @bahn-x/dbx-email-kit
```

## How to Use

**Default**

```jsx
import { EmailFooter } from '@bahn-x/dbx-email-kit';
<EmailFooter />;
```

**Custom Imprint**

```jsx
import { EmailFooter } from '@bahn-x/dbx-email-kit';
<EmailFooter imprint="My custom imprint" />;
```

**Custom Footer Links**

```jsx
import { EmailFooter } from '@bahn-x/dbx-email-kit';
<EmailFooter>
  <p>
    Unsubscribe here: <a href="/unsubscribe">Unsubscribe</a>
  </p>
</EmailFooter>;
```
