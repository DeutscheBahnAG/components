```js
import {
  Email,
  EmailHeader,
  EmailBody,
  EmailPincode,
  EmailButton,
  EmailFooter,
} from '@bahn-x/dbx-email-kit';
```

## Full example

```jsx
import {
  Email,
  EmailHeader,
  EmailBody,
  EmailPincode,
  EmailButton,
  EmailFooter,
} from '@bahn-x/dbx-email-kit';
<Email preview="Email Template Preview">
  <EmailHeader />
  <EmailBody>
    <h1>Headline</h1>
    <p>
      A paragraph with <a href="https://dpp.bahn-x.de">a link</a>.
    </p>
    <EmailPincode>123456</EmailPincode>
    <EmailButton href="https://dpp.bahn-x.de">CTA Button</EmailButton>
  </EmailBody>
  <EmailFooter />
</Email>;
```
