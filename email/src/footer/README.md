# EmailFooter

A visually separated footer to be used below the email content.

## How to Install

```
yarn add @bahn-x/dbx-email-kit
```

## How to Use

```js
import { EmailFooter } from '@bahn-x/dbx-email-kit';
```

**Default**
```jsx
<EmailFooter />
```

**Custom Imprint**
```jsx
<EmailFooter imprint="My custom imprint">
```

**Custom Footer Links**
```jsx
<EmailFooter>
  <p>Unsubscribe here: <a href="/unsubscribe">Unsubscribe</a></p>
</EmailFooter>
```
