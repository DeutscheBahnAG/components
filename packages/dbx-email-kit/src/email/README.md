# Email

The root component to create an email template in the DB design.

Will handle styling and basic markup structure, so that you can focus on your content.

## How to Install

```shell
yarn add @bahn-x/dbx-email-kit
```

## How to Use

```jsx
import {
  Email,
  EmailHeader,
  EmailBody,
  EmailFooter,
} from '@bahn-x/dbx-email-kit';
<Email preview="Your preview text here.">
  <EmailHeader />
  <EmailBody>Your Email content here.</EmailBody>
  <EmailFooter />
</Email>;
```

The `<Email>` component **must** always be the outermost component, all other email components such as `<EmailHeader> `, `<EmailButton>` etc. can only be used inside of `<Email>`, as this component injects the styling for all other email components.

In fact, you can only see the other email components in their respective examples because they are wrapped with a `<Email>` component by the `withEmail` decorator.
