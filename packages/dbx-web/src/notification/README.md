# Notification

```js
import { Notification } from '@bahn-x/dbx-web';
```

```jsx
<Notification message="Hello There!" />
```

## Variants

```jsx
<Notification
  variant={Notification.variants.INFO}
  message="I am a notification."
/>
```

```jsx
<Notification
  variant={Notification.variants.WARNING}
  message="I am a notification."
/>
```

```jsx
<Notification
  variant={Notification.variants.ERROR}
  message="I am a notification."
/>
```

```jsx
<Notification
  variant={Notification.variants.SUCCESS}
  message="I am a notification."
/>
```

## Closeable

```jsx
<Notification
  onClose={() => {}}
  variant={Notification.variants.INFO}
  message="I am a notification."
/>
<Notification
  onClose={() => {}}
  variant={Notification.variants.WARNING}
  message="I am a notification."
/>
<Notification
  onClose={() => {}}
  variant={Notification.variants.ERROR}
  message="I am a notification."
/>
<Notification
  onClose={() => {}}
  variant={Notification.variants.SUCCESS}
  message="I am a notification."
/>
```

## Autofocus close button

```jsx
<Notification
  autofocusCloseButton
  message="My close button is focused."
  onClose={() => {}}
/>
```

## Global (popup)

```jsx static
<Notification global message="A global Notification" />
```

```jsx noeditor
import React, { useState } from 'react';
import { Button } from '@bahn-x/dbx-web';
const [isOpen, setOpen] = useState(false);
<>
  {isOpen && <Notification global message="A global Notification" />}
  <Button onClick={() => setOpen(!isOpen)}>
    {isOpen ? 'Hide Notification' : 'Show Notification'}
  </Button>
</>;
```

## ARIA live region

This demo shows four notifications appearing, each with a delay of four
seconds. Visit this site with a screenreader to hear how new notifications are
being read out. This example is to demonstrate the accessibility feature only.

```jsx noeditor
import React, { useState, useEffect } from 'react';
import { Button, Copy } from '@bahn-x/dbx-web';
const [isOpen, setOpen] = useState(false);
const LiveNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    Object.values(Notification.variants).forEach((variant, index) => {
      setTimeout(() => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          <Notification
            key={variant}
            variant={variant}
            global
            message={`I am Notification number ${index + 1}`}
          />,
        ]);
      }, index * 4000 + 100);
    });
  }, []);
  return <div>{notifications}</div>;
};
<>
  {isOpen && <LiveNotifications />}
  <Button onClick={() => setOpen(!isOpen)}>
    {isOpen ? 'Stop showing Notifications' : 'Start showing Notifications'}
  </Button>
</>;
```

## With title

```jsx
<Notification
  variant={Notification.variants.WARNING}
  title="Your testing period is expired."
  message="Please purchase a copy to continue using this product."
/>
```

## Multiline

```jsx
<Notification message="This is a very long text with a whole lot of words and characters in order to demonstrate the behavior of the notificiation component with multiple lines of text, so we can see that we get details like line heights and adjstument of the icon in relation to the text right. In fact, it is an anti-pattern to display very long texts in notifications, but technically we do not restrict the text length." />
```
