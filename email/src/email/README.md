# Email

The root component to create an email template in the DBX design.

Will handle styling and basic markup structure, so that you can focus on your content.


## How to Install

```
yarn add @bahn-x/dbx-email-kit
```

## How to Use

```js
import { Email, EmailHeader, EmailBody, EmailFooter } from '@bahn-x/dbx-email-kit'
```
```jsx
<Email preview="Your preview text here.">
  <EmailHeader />
  <EmailBody>
    Your Email content here.
  </EmailBody>
  <EmailFooter />
</Email>
```

The `<Email>` component **must** always be the outermost component, all other email components such as `<EmailHeader> `, `<EmailButton>` etc. can only be used inside of `<Email>`, as this component injects the styling for all other email components.

In fact, you can only see the other email components in their respective stories because they are wrapped with a `<Email>` component by the `withEmail` decorator.
