# Notification

```js
import { Notification } from '@bahn-x/dbx-web';
```

```jsx +jsxpreview
<Notification message="Hello There!" />
```

## Variants

```jsx +jsxpreview
<Notification
  variant={Notification.variants.INFO}
  message="I am a notification."
/>
```

```jsx +jsxpreview
<Notification
  variant={Notification.variants.WARNING}
  message="I am a notification."
/>
```

```jsx +jsxpreview
<Notification
  variant={Notification.variants.ERROR}
  message="I am a notification."
/>
```

```jsx +jsxpreview
<Notification
  variant={Notification.variants.SUCCESS}
  message="I am a notification."
/>
```

## With Title

```jsx +jsxpreview
<Notification
  variant={Notification.variants.WARNING}
  title="Your testing period is expired."
  message="Please purchase a copy to continue using this product."
/>
```
